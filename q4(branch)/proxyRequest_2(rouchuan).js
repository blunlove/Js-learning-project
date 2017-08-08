const fs = require('fs');
const http = require('http');

const path = 'http://barbarq.com/open/share/c?q=5981f9dfe1478'

let content = fs.readFileSync('ip_total.txt', 'utf-8');
let proxies = content.split('\n');

const configureOpt = function(ip, port, path) {
    return {
        host : ip,
        port : port,
        method : 'GET',
        path : path,
        headers : {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
            'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests':'1',
            'Accept-Encoding':'gzip, deflate',
            'host': 'www.barbarq.com'
        }
    }
}

const getContent = function(ip, port, path) {
    let proxy = ip + ':' + port;
    opt = configureOpt(ip, port, path);
    return new Promise((resolve, reject) => {
        const request = http.get(opt, (res) => {
            if (res.statusCode < 200 || res.statusCode > 399) {
                reject(proxy + ' fail, code:' + res.statusCode);
            }
            res.on('end', () => resolve(res));
        });
        request.on('socket', (socket) => {
            socket.setTimeout(10000);
            socket.on('timeout', () => request.abort());
        });
        request.on('error', (err) => {
            if (err.code == 'ECONNRESET') reject(proxy + ' time out');
            else reject(proxy + ' fail, code:' + err.code);
        });
    });
};

const normalizeIP = function(proxy) {
    let proxyWithoutPrefix = proxy.substr(7, proxy.length);
    let ip = proxyWithoutPrefix.substr(0, proxyWithoutPrefix.indexOf(':'));
    let port = proxyWithoutPrefix.substr(proxyWithoutPrefix.indexOf(':') + 1,
        proxyWithoutPrefix.length);
    return {
        ip : ip,
        port : port
    }
}

proxies.map((proxy) => {
    let formatted = normalizeIP(proxy);
    let redirectUrl = '';
    getContent(formatted.ip, formatted.port, path)
        .then((res) => {
            if (res.statusCode == 302) {
                redirectUrl = res.headers.location;
                return getContent(formatted.ip, formatted.port, redirectUrl);
            } else Promise.reject('url is invalidate');
        }).then((res) => {
            let nameUrl = 'http://www.barbarq.com/open/share/api/getNick' + 
                redirectUrl.substr(redirectUrl.indexOf('?'));
            return getContent(formatted.ip, formatted.port, nameUrl);
        }).then((res) => {
            console.log('success!!!!!!!!'); 
        }).catch((err) => {
            console.error(err);
        });
});
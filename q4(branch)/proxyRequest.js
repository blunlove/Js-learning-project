let http = require('http');
let fs = require("fs");

let data = fs.readFileSync("aliveIP.txt", "utf-8");
let proxies = data.split('\r\n');

let path = 'http://barbarq.com/open/share/c?q=598e4610234fc';

const getProxy = (proxy) => {
	let [ip, port] = proxy.substr(7).split(':');
	return {
		ip: ip,
		port: port
	}
}

const getOption = (ip, port, p) => {
	return {
		host: ip,
		port: port,
		method: 'GET',
		path: p,
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
			'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
			'Connection': 'keep-alive',
			'Upgrade-Insecure-Requests': '1',
			'Accept-Encoding': 'gzip, deflate',
			'host': 'www.barbarq.com'
		}
	}
}

const getconnetion = (ip, port, path) => {
	let proxy = ip + ':' + port;
	opt = getOption(ip, port, path);
	return new Promise((resolve, reject) => {
		const req = http.get(opt, (res) => {
			if (res.statusCode < 200 || res.statusCode > 399) {
				reject(proxy + ' fail, code:' + res.statusCode);
			}
			res.on('end', () => resolve(res));
		});
		req.on('socket', (socket) => {
			socket.setTimeout(10000);
			socket.on('timeout', () => req.abort());
		});
		req.on('error', (err) => {
			if (err.code == 'ECONNRESET') reject(proxy + ' time out');
			else reject(proxy + ' fail, code:' + err.code);
		});
		req.end();
	});
};

const toCrawlerIt = (proxy) => {
	let proxyip = getProxy(proxy);
	let redirectUrl = '';
	getconnetion(proxyip.ip, proxyip.port, path)
		.then((res) => {
			if (res.statusCode == 302) {
				redirectUrl = res.headers.location;
				return getconnetion(proxyip.ip, proxyip.port, redirectUrl);
			} else return Promise.reject('url is invalidate');
		}).then((res) => {
			let nameUrl = 'http://www.barbarq.com/open/share/api/getNick' +
				redirectUrl.substr(redirectUrl.indexOf('?'));
			return getconnetion(proxyip.ip, proxyip.port, nameUrl);
		}).then((res) => {
			console.log('success!!!!!!!!');
		}).catch((err) => {
			console.error(err);
		});
}

const start = (timeout) => {
	let k = 0;
	let begin = setInterval(function () {
		if (k == proxies.length) {
			clearInterval(begin);
		} else {
			toCrawlerIt(proxies[k]);
		}
		k++;
	}, timeout);
}

start(50);

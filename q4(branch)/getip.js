const http = require('http');
const fs = require('fs');

const regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[^\d]+(\d+)/g;

let hostname = 'www.xicidaili.com';
let path = '/nt/';

const getOptions = (url, p) => {
    return {
        hostname: url,
        port: 80,
        path: p,
        method: 'GET'
    }
}

const getFileIp = (body) => {
    let s = '';
    while (regex.exec(body)) {
        let temp = 'http://' + RegExp.$1 + ':' + RegExp.$2 + '\r\n';
        s = s + temp;
    }
    return s;
}

const getIP = (url, p) => {
    let opt = getOptions(url, p);
    let req = http.request(opt, function (res) {
        res.setEncoding('utf8');
        let body = [];
        res.on('data', function (chunk) {
            body.push(chunk);
        });
        res.on('end', function () {
            body = body.join('');
            fs.appendFile("ip2.txt", getFileIp(body), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        })
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    req.end();
}

const start = (timeout) => {
    let k = 1;
    let time = setInterval(function () {
        console.log('the '+ k +' page');
        let p;
        if (k == 1) {
            p = path;
        } else {
            p = path + k;
        }
        getIP(hostname, p);
        k++;
        if (k == 509) {
            clearInterval(time);
        }
    }, timeout);
}

start(12000);
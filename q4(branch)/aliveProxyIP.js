let http = require('http');
let fs = require("fs");

let data = fs.readFileSync("ip3.txt", "utf-8");
let proxyip = data.split('\r\n');

let proxyIP = [];

for (let i = 0; i < proxyip.length; i++) {
	let temp = proxyip[i].substr(7).split(':')
	proxyIP[i] = [temp[0], temp[1]];
}

var path = 'http://www.baidu.com';
function httpGET(ip, port, p) {
	let opt = {
		host: ip,
		port: port,
		method: 'GET',
		path: p,
		headers: {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
		}
	}
	let req = http.request(opt, function (res) {
		console.log('ok');
		s = 'http://' + ip + ':' + port + '\r\n';
		fs.appendFile("aliveIP.txt", s, function (err) {
			if (err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	});

	req.on('error', function (e) {
		console.log('error got :' + e.message);
	});

	req.end();
}
let k = 0;
let time = setInterval(function () {
	httpGET(proxyIP[k][0], proxyIP[k][1], path);
	k++;
	if (k == proxyIP.length) {
		clearInterval(time);
	}
}, 500);

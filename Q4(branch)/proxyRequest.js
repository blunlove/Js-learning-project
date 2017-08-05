let http = require('http');
let fs = require("fs");

let data = fs.readFileSync("ip.txt", "utf-8");
let proxyip = data.split('\r\n');

let proxyIP = [];
for (let i = 0; i < proxyip.length; i++) {
	let temp = proxyip[i].substr(7).split(':')
	proxyIP[i] = [temp[0], temp[1]];
}
//console.log(proxyIP);

let path = 'http://barbarq.com/open/share/c?q=598533e70085e';

function httpGET(ip, port, p) {
	let opt = {
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
	let req = http.request(opt, function (res) {
		//console.log('ok');
		p = res.headers.location;
		if (p != undefined) {
			let pcut = p.substr(p.indexOf('?'));
			let redirect = http.request(opt, function (res) {
				//console.log('ok');
				p = 'http://www.barbarq.com/open/share/api/getNick' + pcut;
				//console.log(p);
				let redirect2 = http.request(opt, function (res) {
					console.log('ok');
				});

				redirect2.on('error', function (e) {
					console.log('problem with request3:' + e.message);
				});

				redirect2.end();
			});
			redirect.on('error', function (e) {
				console.log('problem with request2:' + e.message);
			});

			redirect.end();
		}
	});

	req.on('error', function (e) {
		console.log('problem with request1:' + e.message);
	});

	req.end();
}

let k = 0;
let time = setInterval(function () {
	httpGET(proxyIP[k][0], proxyIP[k][1], path);
	k++;
	if (k == 20) {
		clearInterval(time);
	}
}, 250);
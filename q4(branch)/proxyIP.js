let http = require('http');
let fs=require("fs");  

let data=fs.readFileSync("ip.txt","utf-8");  
let proxyip=data.split('\r\n');

let proxyIP = [];
for (let i =0 ;i < proxyip.length; i++) {
	let temp = proxyip[i].substr(7).split(':')
	proxyIP[i] = [temp[0],temp[1]] ;
}

var path = 'http://www.baidu.com';
function httpGET(ip,port,p){
	let opt = {
		host:ip,
		port:port,
		method:'GET',
		path:p,
		headers:{
			'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
		}
	}
	let req = http.request(opt,function(res){
		console.log('ok');
	});

	req.on('error',function(e){
		console.log('error got :' + e.message);
	});

	req.end();
}

for (var i = 0; i <proxyIP.length; i++) {
	httpGET(proxyIP[i][0],proxyIP[i][1],path);
}

var fs=require("fs");  

var data=fs.readFileSync("ip2.txt","utf-8");  

var regex=/(\d+.\d+.\d+.\d+:)\d+/g;
var proxyip=data.match(regex);

var proxyIP = [];
for(i=0;i<proxyip.length;i++){
	proxyIP[i] = [proxyip[i].substr(0,(proxyip[i].indexOf(':')-1)),proxyip[i].substr((proxyip[i].indexOf(':')+1))];
}
console.log(proxyIP);
/*
var path = 'http://barbarq.com/open/share/c?q=59812b6746735';

function httpGET(ip,port,p){
	let http = require('http');
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
		p = res.headers.location;
		if(p!=undefined){
			let pcut=p.substr(p.indexOf('?'));
			let redirect = http.request(opt,function(res){
				p = 'http://www.barbarq.com/open/share/api/getNick'+pcut;
				console.log(p);
				let redirect2 = http.request(opt,function(res){
				});

				redirect2.on('error',function(e){
					console.log('problem with request:' + e.message);
				});

				redirect2.end();
			});
			redirect.on('error',function(e){
				console.log('problem with request:' + e.message);
			});

			redirect.end();
		}
		
		
	});

	req.on('error',function(e){
		console.log('problem with request:' + e.message);
	});

	req.end();
}

for (var i = 0; i <proxyIP.length; i++) {
	httpGET(proxyIP[i][0],proxyIP[i][1],path);
}

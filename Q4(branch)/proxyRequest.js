var text='http://123.206.213.73:9001http://120.52.73.97:8080http://116.31.75.194:80http://120.52.73.98:80http://120.52.73.98:8088http://120.52.73.97:80http://120.52.73.98:8080http://125.88.74.122:83http://139.196.12.124:8088http://69.181.163.138:80http://124.133.230.254:80http://218.26.1.109:80http://101.53.101.172:9999http://180.76.133.46:80http://5.39.46.88:80http://58.23.16.240:80http://118.186.219.164:8080http://106.75.81.222:80http://24.203.209.222:8118http://101.4.136.34:80http://112.17.250.78:8080http://120.76.203.31:80http://111.1.3.34:8000http://62.147.142.211:80http://101.4.136.34:81http://5.100.249.110:80http://31.24.154.42:80http://5.160.33.92:3128http://31.24.154.41:80'
var pat = /[0-9]+/g;
var words = text.match(pat);
var proxyIP = [];

for(i=0;i<words.length/5;i++){
	let ip = words[i*5]+'.'+words[i*5+1]+'.'+words[i*5+2]+'.'+words[i*5+3];
	let port = words[i*5+4];
	proxyIP[i] = [ip,port];
	//proxyIP[i][1] = words[i*5+4];
}

var path = 'http://barbarq.com/open/share/c?q=59812b6746735';

function getUrlParam (param,p){
	var reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)');
	var r = p.match(reg);
	if(r != null){
		return unescape(r[2]);
	}else{
		return null;
	}
}

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
		if(p==undefined){
			return;
		}
		let roleId = getUrlParam('id',p);
		let sign = getUrlParam('sign',p);

		let redirect = http.request(opt,function(res){
			p = 'http://www.barbarq.com/open/share/api/getNick?id='+roleId+'&sign'+sign;
			let redirect2 = http.request(opt,function(res){
				console.log('ok');
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
	});

	req.on('error',function(e){
		console.log('problem with request:' + e.message);
	});

	req.end();
}

for (var i = 0; i <proxyIP.length; i++) {
	httpGET(proxyIP[i][0],proxyIP[i][1],path);
}

var fs=require("fs");  

var data=fs.readFileSync("ip.txt","utf-8");  

var regex=/(\d+.\d+.\d+.\d+:)\d+/g;
var proxyip=data.match(regex);

var ip=new Array();
var port=new Array();
for(i=0;i<proxyip.length;i++){
	ip[i]=proxyip[i].substr(0,(proxyip[i].indexOf(':')-1));
	port[i]=proxyip[i].substr((proxyip[i].indexOf(':')+1));
}

//console.log(port);

const http = require('http');
const fs = require('fs');

const regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}[^\d]+(\d+)/g;
const regex2 = /<\/td>[^\d]+<td>/g;

const options = {
    hostname: 'www.xicidaili.com',
    port: 80,
    path: '/nt/3',
    method: 'GET'
};

function getIP(){
    let s='';
    let req = http.request(options, function (res) {
        res.setEncoding('utf8');
        const body = [];
        res.on('data', function (chunk) {
            body.push(chunk);
        });
        res.on('end', function () {
            let temp = body.join('').match(regex);
            for(key in temp){
                temp[key] = 'http://' + temp[key].replace(regex2,':')+'\r\n';
                s=s+temp[key];
            }
            fs.appendFile("ip3.txt", s, function(err) {
                if(err) {
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

let k=0;
let time = setInterval(function(){
	getIP();
	k++;
	if(k==20){
		clearInterval(time);
	}
},500);
let http = require('http');  
  
let qs = require('querystring');  
let regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[^\d]+(\d+)/g;

let options = {  
    hostname: 'www.xicidaili.com',  
    port: 80,  
    path: '/nt/',  
    method: 'GET'
};

let s='' ;

function toTXT(str) {
    var RexStr = /\<|\>|\"|\'|\&|　| /g
    str = str.replace(RexStr,
    function (MatchStr) {
        switch (MatchStr) {
            case "<":
                return "&lt;";
                break;
            case ">":
                return "&gt;";
                break;
            case "\"":
                return "&quot;";
                break;
            case "'":
                return "&#39;";
                break;
            case "&":
                return "&amp;";
                break;
            case " ":
                return "&ensp;";
                break;
            case "　":
                return "&emsp;";
                break;
            default:
                break;
        }
    }
    )
    return str;
}

let req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        let abc = toTXT(chunk);
        //console.log('BODY: ' + chunk);
        let temp = abc.match(regex);
        console.log(abc);
        for(d in temp){
            let ip = d.substring(0,d.indexOf('</td>'));
            let port = d.substring(d.indexOf('<td>')+4);
            s = s+'http://'+ip+':'+port;
            //console.log(d);
        }
        //console.log(s);
    });
});

req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  

req.end();
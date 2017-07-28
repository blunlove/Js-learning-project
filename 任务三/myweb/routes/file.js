var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var formidable = require('formidable');
var fs = require('fs');
//var is = require('is');
//var os = require('os');

/* GET home page. */
router.post('/uploadfile',multipart() ,function(req, res, next) {
	let fileName = req.body.goodsName;
	let fileType = req.files.pics.type;
	let type;
	let filePath = req.files.pics.path;
	let uploadPath;
	if(fileName && filePath){
		if(fileType == 'image/jpeg' || fileType == 'image/pjpeg'){
			type = '.jpg';
		}
		uploadPath ='public/images/goods/'+ fileName + type;
		console.log(filePath,uploadPath);
		is = fs.createReadStream(filePath),
		os = fs.createWriteStream(uploadPath);
		is.pipe(os);
		os.on('close',function(){
			console.log('copy over');
		});
	}
	res.redirect('/login');
});

module.exports = router;

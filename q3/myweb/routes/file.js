let express = require('express');
let router = express.Router();
let multipart = require('connect-multiparty');
let formidable = require('formidable');
let fs = require('fs');
//let is = require('is');
//let os = require('os');
let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);

let goodsUrl = 'public/images/goods/';
/* GET home page. */
router.post('/uploadfile', multipart(), (req, res, next) => {
	let fileName = req.body.goodsName;
	let fileType = req.files.pics.type;
	let type;
	let filePath = req.files.pics.path;
	let detailPath = req.files.detail.path;
	let uploadPath, uploadDetailPath;
	if (fileName && filePath && detailPath) {
		type = '.jpg';
		uploadPath = goodsUrl + fileName + type;
		uploadDetailPath = goodsUrl + fileName + "_detail" + type;
		is = fs.createReadStream(filePath);
		os = fs.createWriteStream(uploadPath);
		is.pipe(os);
		os.on('close', () => {
			console.log('copy over');
		});
		is = fs.createReadStream(detailPath);
		os = fs.createWriteStream(uploadDetailPath);
		is.pipe(os);
		os.on('close', () => {
			console.log('copy over');
		});
	}
	pool.getConnection((err, connection) => {
		connection.query(userSQL.insertGoods, [fileName, uploadPath, uploadDetailPath], function (err, result) {
			connection.release();
		});
	});
	res.redirect('/file/upload');
});

router.get('/upload', (req, res, next) => {
	res.render('uploadfile');
});

router.get('/todetails', (req, res, next) => {
	let param = req.query || req.params;
	res.render('details', { goodsname: param.name });
});

module.exports = router;


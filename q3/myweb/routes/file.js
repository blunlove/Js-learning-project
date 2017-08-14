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
const savePic = (filePath, uploadPath) => {
	is = fs.createReadStream(filePath);
	os = fs.createWriteStream(uploadPath);
	is.pipe(os);
	os.on('close', () => {
		console.log('copy over');
	});
}

router.post('/uploadfile', multipart(), (req, res, next) => {
	let fileName = req.body.goodsName;
	let picsPath = req.files.pics.path;
	let detailPath = req.files.detail.path;
	if (fileName && picsPath && detailPath) {
		let type = '.jpg';
		let uploadPicsPath = goodsUrl + fileName + type;
		let uploadDetailPath = goodsUrl + fileName + "_detail" + type;
		savePic(picsPath, uploadPicsPath);
		savePic(detailPath, uploadDetailPath);
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

module.exports = router;


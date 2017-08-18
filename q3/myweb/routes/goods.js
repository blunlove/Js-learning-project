let express = require('express');
let router = express.Router();
let multipart = require('connect-multiparty');
let formidable = require('formidable');
let fs = require('fs');

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

router.post('/uploadgoods', multipart(), (req, res, next) => {
	let fileName = req.body.goodsName;
	let picsPath = req.files.pics.path;
	let detailPath = req.files.detail.path;
	if (fileName && picsPath && detailPath) {
		let type = '.jpg';
		let uploadPicsPath = goodsUrl + fileName + type;
		let uploadDetailPath = goodsUrl + fileName + "_detail" + type;
		savePic(picsPath, uploadPicsPath);
		savePic(detailPath, uploadDetailPath);
		pool.getConnection((err, connection) => {
			connection.query(userSQL.insertGoods, [fileName, uploadPicsPath, uploadDetailPath], function (err, result) {
				connection.release();
			});
		});
	}
	res.redirect('/goods/upload');
});

router.get('/upload', (req, res, next) => {
	res.render('uploadgoods');
});

router.post('/deletegoods', (req, res, next) => {
	pool.getConnection((err, connection) => {
		let delete_goodsName = req.body.goodsName;
		connection.query(userSQL.queryGood, [delete_goodsName], (err, result) => {
			let goodsPic, goodsDetail;
			if (result) {
				goodsPic = result[0].goodsPic;
				goodsDetail = result[0].goodsDetail;
				connection.query(userSQL.delete, [delete_goodsName], (err, result) => {
					if (result.affectedRows) {
						res.json({ delete: 'success', msg: '删除成功' });
						fs.unlink(goodsPic,()=>{
							console.log("删除商品图片成功");
						});
						fs.unlink(goodsDetail,()=>{
							console.log("删除商品详情成功");
						});
					} else {
						res.json({ delete: 'fail', msg: '删除失败' });
					}
				});
			} else {
				res.json({ delete: 'fail', msg: '该商品不存在' });
			}
			connection.release();
		});
	});
});

router.get('/delete', (req, res, next) => {
	res.render('deletegoods');
});

module.exports = router;


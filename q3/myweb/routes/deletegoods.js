let express = require('express');
let router = express.Router();
let fs = require('fs');

let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);
/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('deletegoods');
});

router.post('/delete', (req, res, next) => {
	pool.getConnection((err, connection) => {
		let delete_goodsName = req.body.goodsName;
		connection.query(userSQL.queryGood, [delete_goodsName], (err, result) => {
			let goodsPic, goodsDetail;
			if (result) {
				goodsPic = result[0].goodsPic;
				goodsDetail = result[0].goodsDetail;
				connection.query(userSQL.delete, [delete_goodsName], (err, result) => {
					if (result.affectedRows) {
						console.log(result);
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

module.exports = router;

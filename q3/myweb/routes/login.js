let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);
/* GET home page. */
router.get('/', (req, res, next) => {
	pool.getConnection((err, connection) => {
		connection.query(userSQL.queryAllGoods, (err, result) => {
			for (let i = 0; i < result.length; i++) {
				result[i].goodsPic = result[i].goodsPic.substr(6);
				result[i].goodsDetail = result[i].goodsDetail.substr(6);
			}
			res.render('login', { goods: result });
			connection.release();
		});
	});
});

module.exports = router;

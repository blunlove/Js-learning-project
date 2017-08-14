let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);
/* GET home page. */
router.get('/', (req, res, next) => {
	pool.getConnection((err, connection) => {
		connection.query(userSQL.queryGood, (err, result) => {
			res.render('detail', { goodDetail: result.goodsDetail });
			connection.release();
		});
	});
});

module.exports = router;

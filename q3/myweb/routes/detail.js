let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);
/* GET home page. */
router.get('/', (req, res, next) => {
	pool.getConnection((err, connection) => {
		let param = req.query || req.params;
		connection.query(userSQL.queryGood, [param.name], (err, result) => {
			res.render('detail', { goodDetail: result[0].goodsDetail.substr(6) });
			connection.release();
		});
	});
});

module.exports = router;

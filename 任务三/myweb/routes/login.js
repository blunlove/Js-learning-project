var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');

var pool = mysql.createPool(dbConfig.mysql);
/* GET home page. */
router.get('/', function(req, res, next) {
	pool.getConnection(function(err, connection){
		connection.query(userSQL.queryAllGoods, function(err, result){
			res.render('login',{goods:result});
			connection.release();
		});
	});
});

module.exports = router;

let express = require('express');
let router = express.Router();

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
		console.log("ok");
		let delete_goodsName = req.body.goodsName;
        connection.query(userSQL.delete, [delete_goodsName], (err, result) => {
            if (result.affectedRows) {
                res.json({ delete: 'success', msg: '删除成功' });
            } else {
                res.json({ delete: 'fail', msg: '该商品不存在' });
            }
            connection.release();
        });
    });
});

module.exports = router;

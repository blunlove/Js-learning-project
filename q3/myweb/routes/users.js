let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);

router.post('/addUser', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query(userSQL.insert, [req.body.userName, req.body.passWord], (err, result) => {
            if (result) {
                res.json({ code: '200', msg: '注册成功' });
            } else {
                res.json({ code: '-200', msg: '注册失败' });
            }
            connection.release();
        });
    });
});

router.get('/deleteUser', (req, res, next) => {
    pool.getConnection((err, connection) => {
        let param = req.query || req.params;
        connection.query(userSQL.delete, [param.name], (err, result) => {
            if (result.affectedRows) {
                res.json({ code: '200', msg: '删除成功' });
            } else {
                res.json({ code: '-200', msg: '不存在当前项' });
            }
            connection.release();
        });
    });
});

router.post('/checkUser', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query(userSQL.queryAll, (err, result) => {
            for (users in result) {
                if (result[users].userName == req.body.userName) {
                    if (result[users].passWord == req.body.passWord) {
                        res.json({ islogin: 'success', msg: '登录成功' });
                        connection.release();
                        return;
                    } else {
                        res.json({ islogin: 'fail', msg: '密码错误' });
                        connection.release();
                        return;
                    }
                }
            }
            res.json({ islogin: 'fail', msg: '用户名错误' });
            connection.release();
        });
    });
});

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

module.exports = router;

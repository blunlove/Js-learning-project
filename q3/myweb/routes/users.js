let express = require('express');
let mysql = require('mysql');
let dbConfig = require('../db/DBConfig');
let userSQL = require('../db/Usersql');

let pool = mysql.createPool(dbConfig.mysql);
let router = express.Router();

router.requireAuthentication = (req, res, next) => {
    if (req.body.islogin || req.body.isregister) {
        next();
        return;
    }
    if (req.cookies["account"] != null) {
        if (req.path == "/" || req.path == "/users/register") {
            res.redirect('/users/login');
            return;
        } else {
            next();
            return;
        }
    } else {
        if (req.path == '/' || req.path == "/users/register") {
            next();
            return;
        }
    }
    console.log("not login, redirect to index");
    res.redirect('/');
};

router.post('/addUser', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query(userSQL.insert, [req.body.userName, req.body.passWord], (err, result) => {
            if (result) {
                connection.query(userSQL.queryUser, [req.body.userName], (err, userMsg) => {
                    res.cookie("account", { uid: userMsg[0].uid, passWord: userMsg[0].passWord });
                });
                res.json({ register: 'success', msg: '注册成功' });
            } else {
                res.json({ register: 'fail', msg: '用户名已存在' });
            }
            connection.release();
        });
    });
});

router.post('/checkUser', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query(userSQL.queryUser, [req.body.userName], (err, result) => {
            if (result[0]) {
                if (result[0].passWord == req.body.passWord) {
                    res.cookie("account", { uid: result[0].uid, passWord: result[0].passWord });
                    res.json({ islogin: 'success', msg: '登录成功' });
                } else {
                    res.json({ islogin: 'fail', msg: '密码错误' });
                }
            } else {
                res.json({ islogin: 'fail', msg: '用户名不存在' });
            }
            connection.release();
        });
    });
});

router.get('/register', (req, res, next) => {
    res.render('register');
});

router.get('/login', (req, res, next) => {
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

router.post('/getUserName', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query(userSQL.getUserById, [req.body.uid], (err, result) => {
            if (result[0] && result[0].passWord == req.body.passWord) {
                res.json({ userName: result[0].userName });
            } else {
                res.clearCookie("account", { path: '/' });
                res.send();
            }
            connection.release();
        });
    });
});

module.exports = router;

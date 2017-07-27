var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
/*var responseJSON = function (res, ret){
	if(typeof ret === 'undefined'){
		res.json({code:'-200',msg:'操作失败'});
	} else {
		res.json({code:'200',msg:'操作成功'});
	}
};*/
// 添加用户
router.get('/addUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection){
        // 获取前台页面传过来的参数
        let param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function(err, result){
            // 以json形式，把操作结果返回给前台页面
            if (result) {
            	res.json({code:'200',msg:'添加成功'});
            }else {
            	res.json({code:'-200',msg:'添加失败'+err});
            }
            // 释放连接
            connection.release();
        });
    });
});

router.get('/deleteUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection){
        // 获取前台页面传过来的参数
        let param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.delete, [param.uid], function(err, result){
            // 以json形式，把操作结果返回给前台页面
            if(result.affectedRows){
            	res.json({code:'200',msg:'删除成功'});
            }else {
            	res.json({code:'-200',msg:'不存在当前项'});
            }
            // 释放连接
            connection.release();
        });
    });
});

router.get('/updateUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection){
        // 获取前台页面传过来的参数
        let param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.update,[param.name,param.uid], function(err, result){
            // 以json形式，把操作结果返回给前台页面
            if(result.affectedRows){
            	res.json({code:'200',msg:'更新成功'});
            }else {
            	res.json({code:'-200',msg:'更新失败，此id不存在'});
            }
            // 释放连接
            connection.release();
        });
    });
});

router.get('/queryAllUser', function(req, res, next){
    // 从连接池获取连接
    pool.getConnection(function(err, connection){
        // 获取前台页面传过来的参数
        let param = req.query || req.params;
        // 建立连接 增加一个用户信息
        connection.query(userSQL.queryAll, function(err, result){
            // 以json形式，把操作结果返回给前台页面
            if(result){
            	res.json(result);
            }else {
            	res.json({code:'-200',msg:'操作失败'});
            }
            // 释放连接
            connection.release();
        });
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;

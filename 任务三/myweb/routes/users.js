var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');

var pool = mysql.createPool(dbConfig.mysql);

router.get('/addUser', function(req, res, next){
    pool.getConnection(function(err, connection){
        let param = req.query || req.params;
        connection.query(userSQL.insert, [param.uid,param.name,param.password], function(err, result){
            if (result) {
            	res.json({code:'200',msg:'添加成功'});
            }else {
            	res.json({code:'-200',msg:'添加失败'+err});
            }
            connection.release();
        });
    });
});

router.get('/deleteUser', function(req, res, next){
    pool.getConnection(function(err, connection){
        let param = req.query || req.params;
        connection.query(userSQL.delete, [param.uid], function(err, result){
            if(result.affectedRows){
            	res.json({code:'200',msg:'删除成功'});
            }else {
            	res.json({code:'-200',msg:'不存在当前项'});
            }
            connection.release();
        });
    });
});

router.get('/updateUser', function(req, res, next){
    pool.getConnection(function(err, connection){
        let param = req.query || req.params;
        connection.query(userSQL.update,[param.name,param.uid], function(err, result){
            if(result.affectedRows){
            	res.json({code:'200',msg:'更新成功'});
            }else {
            	res.json({code:'-200',msg:'更新失败，此id不存在'});
            }
            connection.release();
        });
    });
});

router.get('/queryAllUser', function(req, res, next){
    pool.getConnection(function(err, connection){
        let param = req.query || req.params;
        connection.query(userSQL.queryAll, function(err, result){
            if(result){
            	res.json(result);
            }else {
            	res.json({code:'-200',msg:'操作失败'});
            }
            connection.release();
        });
    });
});

router.post('/checkUser', function(req, res, next){
    pool.getConnection(function(err, connection){
        connection.query(userSQL.queryAll, function(err, result){
            for(users in result){
            	if(result[users].userName==req.body.userName){
            		if(result[users].passWord==req.body.passWord){
            			res.json("ok");
            		}else {
            			console.log('密码错误');
            		}
            	}else{
            		console.log('用户名不存在');
            	}
            }
            connection.release();
        });
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;

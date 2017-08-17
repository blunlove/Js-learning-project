let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('deletegoods');
});

router.get('/deletegoods', (req, res, next) => {
    pool.getConnection((err, connection) => {
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

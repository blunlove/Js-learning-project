var UserSQL = 
{  
	insert:'INSERT INTO User(userName,passWord) VALUES(?,?)', 
	delete:'DELETE FROM User WHERE userName= ? ',
	queryAll:'SELECT * FROM User',
	getUserById:'SELECT * FROM User WHERE uid = ? ',

	insertGoods:'INSERT INTO goods(goodsName,goodsPic,goodsDetail) VALUES(?,?,?)',
	queryAllGoods:'SELECT * FROM goods',
	queryGood:'SELECT * FROM goods WHERE goodsName = ?',
};
module.exports = UserSQL;
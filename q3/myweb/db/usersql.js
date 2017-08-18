let UserSQL = 
{  
	insert:'INSERT INTO User(userName,passWord) VALUES(?,?)', 
	queryUser:'SELECT * FROM User WHERE userName = ?',
	queryAll:'SELECT * FROM User',
	getUserById:'SELECT * FROM User WHERE uid = ? ',

	insertGoods:'INSERT INTO goods(goodsName,goodsPic,goodsDetail) VALUES(?,?,?)',
	delete:'DELETE FROM goods WHERE goodsName= ? ',
	queryAllGoods:'SELECT * FROM goods',
	queryGood:'SELECT * FROM goods WHERE goodsName = ?',
};
module.exports = UserSQL;
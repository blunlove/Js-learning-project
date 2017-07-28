var UserSQL = 
{  
	insert:'INSERT INTO User(userName,passWord) VALUES(?,?)', 
	delete:'DELETE FROM User WHERE userName= ? ',
	insertGoods:'INSERT INTO goods(goodsName) VALUES(?)',
	queryAll:'SELECT * FROM User',
	getUserById:'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;
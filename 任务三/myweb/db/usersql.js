var UserSQL = 
{  
	insert:'INSERT INTO User(uid,userName,passWord) VALUES(?,?,?)', 
	delete:'DELETE FROM User WHERE uid= ? ',
	update:'UPDATE User SET userName =? WHERE uid= ? ',
	queryAll:'SELECT * FROM User',  
	getUserById:'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;
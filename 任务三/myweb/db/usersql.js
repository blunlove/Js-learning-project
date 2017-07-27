var UserSQL = 
{  
	insert:'INSERT INTO User(userName,passWord) VALUES(?,?)', 
	delete:'DELETE FROM User WHERE userName= ? ',
	update:'UPDATE User SET userName =? WHERE uid= ? ',
	queryAll:'SELECT * FROM User',  
	getUserById:'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;
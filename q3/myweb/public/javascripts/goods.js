const toDetails = (good) => {
	let goodName = good.id;
	location = "/detail/?name=" + goodName;
}

const getCookie = () => {
	let account = 'account';
	c_start = document.cookie.indexOf(account + "=");
	if (c_start != -1) {
		c_start = c_start + account.length + 1;
		c_end = document.cookie.indexOf(";", c_start);
		if (c_end == -1) c_end = document.cookie.length;
		return unescape(document.cookie.substring(c_start, c_end));
	}
}

const toSeeUsername = () => {
	let temp = getCookie()
	let cookie = document.cookie;
	const regex = /\"userName\":\"(.+)\"/g;
	regex.exec(temp);
	alert(RegExp.$1);
}

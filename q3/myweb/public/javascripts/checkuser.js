const checkSend = () => {
	let userName = $("#name").val();
	let passWord = $("#psw").val();
	if (userName.length == 0) {
		alert('账号不能为空');
		$('.text').val("");
		return;
	} else if (passWord.length == 0) {
		alert('密码不能为空');
		$('.text').val("");
		return;
	}
	$.post('/users/checkUser', { 'userName': userName, 'passWord': hex_md5(passWord), 'islogin': true }, (res) => {
		if (res.islogin == 'fail') {
			alert(res.msg);
			$('.text').val("");
		} else {
			location = "/users/login";
		}
	});
}

const registerSend = () => {
	let userName = $("#name").val();
	let passWord = $("#psw").val();
	if (userName.length == 0) {
		alert('账号不能为空');
		return;
	} else if (passWord.length == 0) {
		alert('密码不能为空');
		return;
	}
	$.post('/users/addUser', { 'userName': userName, 'passWord': hex_md5(passWord), 'isregister': true }, (res) => {
		if (res.register == 'fail') {
			alert(res.msg);
			$('.text').val("");
		} else {
			location = '/users/login';
		}
	});
}

const toRegister = () => {
	location = "/users/register";
}

const backIndex = () => {
	location = "/";
}
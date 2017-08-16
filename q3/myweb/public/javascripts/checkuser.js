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
	$.post('/users/checkUser', { 'userName': userName, 'passWord': passWord, 'islogin': true }, (res) => {
		if (res.islogin == 'fail') {
			alert(res.msg);
			$('.text').val("");
		} else {
			location = "/login";
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
	$.post('/users/addUser', { 'userName': userName, 'passWord': passWord, 'isregister': true }, (res) => {
		if (res.code == '-200') {
			alert(res.msg);
			$('.text').val("");
		} else {
			location = '/login';
		}
	});
}

const toRegister = () => {
	location = "/register";
}

const backLogin = () => {
	location = "/";
}
function check(){
	let userName=$("#name").val();
	let passWord=$("#psw").val();
	if(userName.length==0){
		alert('账号不能为空');
		return;
	}else if(passWord.length==0){
		alert('密码不能为空');
		return;
	}
	$.post('/users/checkUser',{'userName':userName,'passWord':passWord});
}
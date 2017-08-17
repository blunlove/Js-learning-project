const getCookie = () => {
    let cookie = document.cookie;
    if (cookie != null) {
        return unescape(cookie);
    } else {
        return null;
    }
}

const toSeeUsername = () => {
    let temp = getCookie();
    if (temp != null) {
        const regex = /\"userName\":\"(.+)\"/g;
        regex.exec(temp);
        return RegExp.$1;
    } else {
        return temp;
    }
}

const getUserName = () => {
    if (document.cookie.length != 0) {
        let userName = toSeeUsername();
        $('#the_userName').text(userName);
        $('#toExit').text('退出');
    } else {
        $('#the_userName').text('未登录');
        $('#toExit').remove();
    }
}
getUserName();

const deleteCookie = () => {
    $.post('/deleteCookie', (res) => {
		location = '/';
	});
}
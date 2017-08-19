const getCookie = () => {
    let cookie = document.cookie;
    if (cookie != null) {
        return unescape(cookie);
    } else {
        return null;
    }
}

const toSeeUserMsg = () => {
    let temp = getCookie();
    if (temp != null) {
        const regex = /\"uid\":(.+),\"passWord\":\"(.{32})/g;
        regex.exec(temp);
        return [RegExp.$1, RegExp.$2];
    } else {
        return temp;
    }
}

const getUserName = () => {
    if (document.cookie.length != 0) {
        let userMsg = toSeeUserMsg();
        $.post('/users/getUserName', { uid: userMsg[0], passWord: userMsg[1] }, (res) => {
            if (document.cookie.length != 0) {
                let this_user = res.userName;
                $('#the_userName').text(this_user);
                $('#toExit').text('退出');
            } else {
                location = '/';
            }
        });
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
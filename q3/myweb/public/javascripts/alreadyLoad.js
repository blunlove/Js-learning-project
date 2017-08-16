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
    let userName = toSeeUsername();
    $('#the_userName').text(userName);
}
getUserName();

const delAllCookie = () => {
    var myDate = new Date();
    myDate.setTime(-1000);
    var data = document.cookie;
    var dataArray = data.split("; ");
    for (var i = 0; i < dataArray.length; i++) {
        var varName = dataArray[i].split("=");
        document.cookie = varName[0] + "=''; expires=" + myDate.toGMTString();
    }
    location = '/';
}
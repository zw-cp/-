// 用户名正则表达式
function checkName(name) {
    var re = /^[a-zA-Z][a-zA-Z0-9]{8,}$/;
    if (re.test(name)) {
        return true;
    } else {
        return false;
    }
}

// 密码正则表达式
function checkPassword(name) {
    var re = /^[\w]{8,}$/;
    if (re.test(name)) {
        return true;
    } else {
        return false;
    }
}

// 邮箱正则表达式
function checkMail(name){
    var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (re.test(name)) {
        return true;
    } else {
        return false;
    }
}
// 电话号码正则表达式
function checkPhone(name){
    var re = /^1(3[0-9]|5[189]|8[6789])[0-9]{8,}$/;
    if (re.test(name)) {
        return true;
    } else {
        return false;
    }
}
exports.login = function (username, password) {
    return new Promise((res, rej) => {
        if (username === password) {
            res('success');
        } else {
            rej('user name or password isn\'t currect');
        }
    })
}
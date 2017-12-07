exports.login = function (username, password) {
    return new Promise((res, rej) => {
        if (username === password) {
            setTimeout(()=>{
                res('success');
            },1000)
        } else {
            rej('user name or password isn\'t currect');
        }
    })
}
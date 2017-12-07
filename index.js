const auth = require('./auth/index.js');
const logger = new require('./logger/index.js').logger
const thisLogger = new logger({log:function(message){
    console.log(message);
}})
thisLogger.log('try to login');
auth.login(process.argv[2], process.argv[3])
    .then((res) => {
        thisLogger.log(res)
    })
    .catch((error) => {
        thisLogger.log(error);
    })
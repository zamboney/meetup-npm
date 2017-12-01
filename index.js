const auth = require('./auth/index.js');
const logger = require('./logger/index.js');
logger.log('try to login');
auth.login(process.argv[2], process.argv[3])
    .then((res) => {
        logger.log(res)
    })
    .catch((error) => {
        logger.log(error);
    })
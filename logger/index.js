const moment = require('moment');
exports.logger = function (logger) {
    this.logger = logger;
    this.log = function (message) {
        this.logger.log(moment().format() + ' => ' + message)
    }
};
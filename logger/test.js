let assert = require('assert');
let logger = require('./index').logger;

describe('logger', function () {
  describe('log()', function () {
    it('should send log to print', function () {
      let innerMessage = '';
      let testLogger = new logger({
        log: function (message) {
          innerMessage = message;
        }
      })
      testLogger.log('message');
      assert.equal(innerMessage.match(/.*(=>.*)/)[1], '=> message');
    });
  });
});
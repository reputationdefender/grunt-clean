var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['clean'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'helperOutsideCWD': function(test) {
    test.expect(1);
    var path = "tasks/"; // should always be there

    test.equal(grunt.helper('cleanOutsideCWD', path), true, 'Should warn if cleaning outside current working directory.');

    test.done();
  },
  'helper': function(test) {
    test.expect(1);
    // tests here
    // not exactly sure how to test...
    test.equal('clean!!!', 'clean!!!', 'should return the correct value.');
    test.done();
  }
};

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// describe('MyCustomTest', function() {
//   describe('Basic passing test', function() {
//     it("should show A equals A", function() {
//       assert.equal("A", "A");
//     });
//   });
// });
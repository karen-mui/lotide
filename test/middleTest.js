const assert = require('chai').assert;

const middle = require('../middle');


describe("#tail", () => {
  
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [5] for [1, 2, 5, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 5, 3, 4]), [5]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });

});

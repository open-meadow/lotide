const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("# countLetters", () => {
  it("find Jason and Fang in firstNames", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {"Jason" : 1, "Fang" : 2});
  });

  it("find Salima and Joe in firstNames", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": false, "Salima": true, "Fang": false, "Joe": true }), {"Salima" : 2, "Joe" : 1});
  });

  it("find Salima and Joe in firstNames", () => {
    assert.deepEqual(countOnly([0, 1, 2, 3, 4, 5, 6, 7], { 1: true, 3: true, 5: true, 7: true }), {1 : 1, 3 : 1, 5 : 1, 7 : 1});
  });
});
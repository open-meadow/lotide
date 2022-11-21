const { expect } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require("chai").assert;

describe("# middle test", () => {
  it("check middle value of array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("check middle value of array with two elements", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });

  it("check middle value of array with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]); // can you have two?
  });

  it("check middle value of array with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it("check middle values of array with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });

  it("check middle values of array with even number of elements", () => {
    assert.deepEqual(middle([143, 212, 134, 463, 115, 986]),[134, 463]);
  });
})


// assertArraysEqual(middle([1]),[]); // => []
// assertArraysEqual(middle([1, 2]),[]); // => []
// assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// console.log(middle([]));
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([143, 212, 134, 463, 115, 986]));

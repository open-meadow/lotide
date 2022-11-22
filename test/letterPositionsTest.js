const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("# letter positions", () => {
  it("find hello", () => {
    assert.deepEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
  });

  it("find poopy", () => {
    assert.deepEqual(letterPositions("poo py"), {p: [0, 3], o: [1, 2], y: [4]});
  });
});
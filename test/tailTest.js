const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("# tail test", () => {
  it("Yo yo lighthouse labs to Lighthouse Labs", () => { 
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("Is blank returning blank", () => assert.deepEqual(tail([]),[]));

  it("poopoo, peepee, poopy to peepee, poopy", () => { 
    assert.deepEqual(tail(["poopoo", "peepee", "poopy"]), ["peepee", "poopy"]);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const word = [];
// tail(word);
// assertEqual(word.length, 1);
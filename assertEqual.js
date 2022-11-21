const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
  else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
};

// // Test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("poopoo","poopoo");
// assertEqual("poopoo","POOPOO");
// assertEqual(123, 234);

module.exports = assertEqual;
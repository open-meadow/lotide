// const assertEqual = function(actual, expected) {
//   if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
//   else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
// };

// const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  // if array lengths are not equal, return false
  if (arr1.length != arr2.length) return false;
  
  let check = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) check++; //check if value is same
  }
  
  return check === arr1.length; //if every value is same, return true. or false.
};

module.exports = eqArrays;
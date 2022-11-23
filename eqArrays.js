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

    // console.log(arr1[i], arr2[i]);
    
    if(Array.isArray(arr1[i]) === true || Array.isArray(arr2[i]) === true) {
      // console.log(eqArrays(arr1[i], arr2[i]));
      if(eqArrays(arr1[i], arr2[i]) === true) {
        check++;
        // console.log(check);
      }
      else continue;
    }

    if (arr1[i] === arr2[i]) check++; //check if value is same
  }

  // console.log(check);
  // console.log(arr1.length);
  // console.log(check === arr1.length);

  return check === arr1.length; //if every value is same, return true. or false.
};

module.exports = eqArrays;
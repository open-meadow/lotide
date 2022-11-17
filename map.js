const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["p", "qontrol", "wo", "yajor", "com"];

const map = (array, callback) => {
  console.log("Array:", array);
  console.log("Callback:", callback);

  const results = [];

  for (let item of array) {
    console.log("Item before callback: ", item);
    console.log("Item after callback: ", callback(item));
    results.push(callback(item));
  }

  return results;
};

const eqArrays = function(arr1, arr2) {
  // if array lengths are not equal, return false
  if (arr1.length !== arr2.length) return false;
  
  let check = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) check++; //check if value is same
  }
  
  return check === arr1.length; //if every value is same, return true. or false.
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);

  else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);

};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map(["p", "qontrol", "wo", "yajor", "com"], word => word[0]), ["p","q","w","y","c"]);
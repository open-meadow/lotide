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

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let a = flatten(arr[i]); // RECURSION SUCCESSFUL!!!!!!!!!
      //console.log(a);
      for (let j = 0; j < a.length; j++) newArr.push(a[j]); 
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;

};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
console.log(flatten(["asdas", "asdaserd", ["3", 4], "ndjkasncjkb", [6]]));
console.log(flatten(["asdas", "asdaserd", ["3", [4,5,6]], ["ndjkasncjkb", 783126, "judasfhsabdjk"], [6]]));
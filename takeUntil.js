const takeUntil = (array, callback) => {
  let newArr = []
  for (let item of array) {
    // console.log(item);
    // console.log(!callback(item));
    if(!callback(item)) newArr.push(item);
    else break;
    // console.log(newArr);
  }
  return newArr;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
console.log(results2);

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);

assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);

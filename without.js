const eqArrays = function (arr1, arr2) {
  // if array lengths are not equal, return false
  if (arr1.length !== arr2.length) return false;

  let check = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) check++; //check if value is same
  }

  return check === arr1.length; //if every value is same, return true. or false.
};

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
    return true;
  }

  else {
    console.log(` 💩 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

};

const without = function (source, itemsToRemove) {
  // Initialize newArray.
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let toBePushed = true
    for (let j = 0; j < source.length; j++) {
      if (source[i] === itemsToRemove[j]) {

        toBePushed = false
        break
      }
    }
    if (toBePushed) {
      newArray.push(source[i])
    }

  }


  // return newArray
  console.log("--------------------------");
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


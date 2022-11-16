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

const middle = function(arr) {
  
  //console.log("arr.length ", arr.length);
  let newArr = [];

  if (arr.length <= 2) newArr = [];

  else {
    if (arr.length % 2 !== 0) {
      //console.log("Odd Middle number", Math.ceil(arr.length/2));
      newArr.push(Math.ceil(arr.length/2)); //middle index
    }

    else {
      //console.log("Even Middle Numbers", (arr.length/2)-1, (arr.length/2), (arr.length/2)+1)
      newArr.push((arr[arr.length/2 - 1]),(arr[arr.length/2])); // two middle indexes
    }
  }

  return newArr;
  
};

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// console.log(middle([]));
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([143, 212, 134, 463, 115, 986]));

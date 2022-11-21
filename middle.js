// const eqArrays = function(arr1, arr2) {
//   // if array lengths are not equal, return false
//   if (arr1.length !== arr2.length) return false;
  
//   let check = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) check++; //check if value is same
//   }
  
//   return check === arr1.length; //if every value is same, return true. or false.
// };

// const assertArraysEqual = function(actual, expected) {

//   if (eqArrays(actual, expected)) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);

//   else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);

// };

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

module.exports = middle;
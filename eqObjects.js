// const assertEqual = function (actual, expected) {
//   if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
//   else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
// };

// const eqArrays = function (arr1, arr2) {
//   // if array lengths are not equal, return false
//   if (arr1.length != arr2.length) return false;

//   let check = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) check++; //check if value is same
//   }
//   return check === arr1.length; //if every value is same, return true. or false.
// };

// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!

const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {

  //console.log(Object.keys(object1).length === Object.keys(object2).length);

  // console.log("=====================================")

  // console.log(object1);
  // console.log(object2);


  if (Object.values(object1).length !== Object.values(object2).length) {
    // console.log(Object.values(object1));
    // console.log(Object.values(object2));
    
    return false;
  } 

  else {

    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    //console.log(values1);
    for (let i = 0; i < keys1.length; i++) {

      console.log("Array!", object1[keys1[i]], object2[keys1[i]]);

      console.log(typeof(object1[keys1[i]]), typeof(object2[keys1[i]]));

      if(typeof object1[keys1[i]] === 'object' || typeof object2[keys1[i]] === "object") {
        console.log(eqObjects(object1[keys1[i]], object2[keys1[i]]));
        if (eqObjects(object1[keys1[i]], object2[keys1[i]]) === false) return false;
        else continue;
      }

      if (Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys1[i]])) {

        

        if (eqArrays(object1[keys1[i]], object2[keys1[i]]) === true) {
          continue;
        }

      }

      
      if (object1[keys1[i]] !== object2[keys1[i]]) return false;
      
    }
  }
  return true;
};

module.exports = eqObjects;
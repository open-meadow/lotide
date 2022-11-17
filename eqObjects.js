const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
  else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  // if array lengths are not equal, return false
  if (arr1.length != arr2.length) return false;
  
  let check = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) check++; //check if value is same
  }
  return check === arr1.length; //if every value is same, return true. or false.
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  
  //console.log(Object.keys(object1).length === Object.keys(object2).length);
  

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  else {

    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    //console.log(values1);
    for (let i = 0; i < keys1.length; i++) {
      if(Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys1[i]])) {
        console.log ("Array!", object1[keys1[i]], object2[keys1[i]]);
        if (eqArrays(object1[keys1[i]], object2[keys1[i]]) === true) continue;
      }

      else {
        if (object1[keys1[i]] != object2[keys1[i]]) return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


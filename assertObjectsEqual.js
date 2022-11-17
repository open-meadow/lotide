const eqArrays = function (arr1, arr2) {
  // if array lengths are not equal, return false
  if (arr1.length != arr2.length) return false;

  let check = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) check++; //check if value is same
  }
  return check === arr1.length; //if every value is same, return true. or false.
};

const eqObjects = function (object1, object2) {
  //console.log(Object.keys(object1).length === Object.keys(object2).length);

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  else {

    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    //console.log(values1);
    for (let i = 0; i < keys1.length; i++) {

      if (Array.isArray(object1[keys1[i]]) && Array.isArray(object2[keys1[i]])) {

        //console.log("Array!", object1[keys1[i]], object2[keys1[i]]);

        if (eqArrays(object1[keys1[i]], object2[keys1[i]]) === true) {
          continue;
        }

      }


      if (object1[keys1[i]] !== object2[keys1[i]]) return false;

    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // console.log(eqObjects(actual, expected));
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) console.log(` 💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(` 💩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cd3 = { c: ["2", 12], d: 15 };
assertObjectsEqual(cd, cd3); // => false
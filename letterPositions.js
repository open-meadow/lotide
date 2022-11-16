const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]);
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
    else results[sentence[i]].push(i);
  }

  //console.log(Object.entries(results));
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


//assertArraysEqual(Object.entries(letterPositions("hello")), Object.entries(result));

assertArraysEqual(letterPositions("hello").e, [1]);

//console.log(letterPositions("hello"));
//console.log(letterPositions("poopoo"));
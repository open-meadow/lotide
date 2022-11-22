// const assertEqual = function(actual, expected) {
//   if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
//   else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
// };

const findKeyByValue = function(bestTVShow, TVShow) {
  let values = Object.entries(bestTVShow);
  //console.log(values);
  for (let i = 0; i < values.length; i++) {
    //console.log(values[i]);
    for (let j = 0; j < values[i].length; j++) {
      if (values[i][j] === TVShow) {
        //console.log(values[i][j], values[i][j - 1]);
        return values[i][j - 1];
      }
    }
  }
  return "Not found";
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
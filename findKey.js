const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
  else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
};

const findKey = (object, callback) => {
  // console.log(object);
  let values = Object.values(object);
  let keys = Object.keys(object);
  // console.log(values);
  let counter = 0;

  for (let i of values) {
    // console.log(i);
    // console.log(callback(i));

    if(callback(i) == true) {
      return(keys[counter]);
    }

    counter++;
  }

}

let findKeys = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // nona

assertEqual(findKeys, "noma");

findKeys = findKey({
  "Slue Hill": { stars: 1 },
  "Qkaleri":   { stars: 3 },
  "Roma":      { stars: 2 },
  "MlBulli":   { stars: 3 },
  "Pra":       { stars: 2 },
  "PAkelarre":  { stars: 3 }
}, x => x.stars === 2)

assertEqual(findKeys, "Qkaleri");
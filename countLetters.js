const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(` 💯 Assertion Passed: ${actual} === ${expected}`);
  else console.log(` 💩 Assertion Failed: ${actual} != ${expected}`);
};

const countLetters = function(str) {
  let newStr = str.replace(/ /g,"");
  let strCount = {};
  //console.log(newStr);
  for (let i of newStr) {
    //console.log(i);
    if (!strCount[i]) strCount[i] = 1;
    else strCount[i]++;
  }
  return strCount;
}

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('poopoo'));

assertEqual((countLetters('lighthouse in the house')["i"]), 2);
assertEqual((countLetters('poopoo')["p"]), 4);
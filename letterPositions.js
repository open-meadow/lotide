const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  sentence = sentence.replace(/ /g, "");

  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
    else results[sentence[i]].push(i);
  }

  //console.log(Object.entries(results));
  return results;
};

module.exports = letterPositions;

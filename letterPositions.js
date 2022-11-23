const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter] === undefined) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};

module.exports = letterPositions;
const countLetters = function(stringInput) {
  const results = {};
  for (const letter of stringInput) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

module.exports = countLetters;
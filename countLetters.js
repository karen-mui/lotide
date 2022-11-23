const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.table(countLetters('lighthouse'));

const result1 = countLetters('lighthouse');

assertEqual(result1["h"], 2);
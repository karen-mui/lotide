const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let num = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      num++;
    }
  }
  if (num === array1.length && num === array2.length) {
    return true;
  }
};

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

console.table(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
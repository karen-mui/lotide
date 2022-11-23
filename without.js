const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  let num = 0;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const without = function(sourceArray, itemsToRemove) {
  let finalArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (sourceArray[i] !== itemsToRemove[x]) {
        finalArray.push(sourceArray[i]);
      }
    }   
  }
return finalArray;   
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
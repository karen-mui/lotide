const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  let num = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {  
    num++;
    }
  }
  if (num === array1.length && num === array2.length) {
    return true;
  }      
}

assertArraysEqual([2, 5, "10"], ["2", 5, "10"]); 
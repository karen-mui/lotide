// TEST/ASSERTION FUNCTIONS
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
}

// ACTUAL FUNCTION
/* check the number of elements inside
* 1 or 2 elements: empty array
* odd number of elements: an array containing a single middle element should be returned
* even number of elements: an array containing 2 element sin the middle should be returned
*/
const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 === 1 && array.length !== 1) {
    middleArray.push(array[Math.floor(array.length / 2)])
  } else if (array.length % 2 === 0 && array.length !== 2) {
    middleArray.push(array[((array.length / 2) - 1)], array[(array.length / 2)]);
  }
  return middleArray;  
}

// TEST CODE
console.log(middle([1, 1, 1]))
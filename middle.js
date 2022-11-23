const eqArrays = require('./eqArrays');

const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 === 1 && array.length !== 1) {
    middleArray.push(array[Math.floor(array.length / 2)])
  } else if (array.length % 2 === 0 && array.length !== 2) {
    middleArray.push(array[((array.length / 2) - 1)], array[(array.length / 2)]);
  }
  return middleArray;  
}

module.exports = middle
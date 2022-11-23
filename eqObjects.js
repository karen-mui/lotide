const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const x of object1Keys) { // loop through the KEYS of object 1
    if (Array.isArray(object1[x]) && Array.isArray(object2[x])) { // Array.isArray() checks if the passed value is an array; if it is an array, we use eqArrays to compare
      let result = eqArrays(object1[x], object2[x]);
      if (result === false) {
        return false;
      }
    } else if (object1[x] !== object2[x]) { // compare value in key 1 object 1 and object 2)
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;
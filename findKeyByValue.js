const findKeyByValue = function(object, x){
  for (const value in object) {
    if (object[value] === x) {
      return value;
    }
  }
}

module.exports = findKeyByValue
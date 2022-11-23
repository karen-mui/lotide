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

module.exports = without;
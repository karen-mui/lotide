const takeUntil = function (array, callback) {
  const results = []
  for (let item of array) {
    // console.log(callback(item));
    if (callback(item) === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}

module.exports = takeUntil
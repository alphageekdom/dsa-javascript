function arraySum(arr) {
  return arr.length === 0 ? 0 : arr[0] + arraySum(arr.slice(1));
}

module.exports = arraySum;

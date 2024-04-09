function arrayIntersection(arr1, arr2) {
  const newArr = new Set([...arr1]);

  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    if (newArr.has(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

module.exports = arrayIntersection;

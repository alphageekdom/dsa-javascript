function findMissingNumber(arr) {
  const newArr = [...arr];

  if (!newArr || newArr.length === 0) {
    return undefined;
  }

  const n = newArr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < newArr.length; i++) {
    actualSum += newArr[i];
  }

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;

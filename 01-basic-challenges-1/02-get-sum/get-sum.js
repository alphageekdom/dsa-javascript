function getSum(num1, num2) {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    throw new Error('Both parameters are not numbers');
  }

  return num1 + num2;
}

module.exports = getSum;

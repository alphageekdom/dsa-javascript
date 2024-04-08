function findMaxNumber(arr) {
  const newArr = [...arr];

  let max = 0;

  //   Loop the array
  for (let i = 0; i < newArr.length; i++) {
    const num = newArr[i];
    if (num > max) {
      max = num;
    }
  }
  //   Compare prev value to the next
  // If value > prev value replace as max
  // return max value

  return max;
}

module.exports = findMaxNumber;

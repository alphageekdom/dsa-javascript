function removeDuplicates(arr) {
  const newArr = [...arr];

  const result = [];

  for (let i = 0; i < newArr.length; i++) {
    const char = newArr[i];
    if (!result.includes(char)) {
      result.push(char);
    }
  }

  return result;
}

module.exports = removeDuplicates;

function findMissingLetter(arr) {
  const newArr = [...arr];

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const startIndex = alphabet.indexOf(newArr[0]);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}

module.exports = findMissingLetter;

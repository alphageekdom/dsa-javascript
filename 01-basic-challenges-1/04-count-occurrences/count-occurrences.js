function countOccurrences(str, char) {
  if (typeof str !== 'string' && typeof char !== 'string') {
    throw new Error('String and Char are not strings');
  }

  let newStr = str.slice();

  let count = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === char) {
      count++;
    }
  }

  return count;
}

module.exports = countOccurrences;

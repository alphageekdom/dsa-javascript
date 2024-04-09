function countVowels(str) {
  if (typeof str !== 'string') {
    throw new Error('Data type is not a string');
  }

  const formattedStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;

function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Not a valid string');
  }

  const newStr = str
    .slice()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const revStr = newStr.split('').reverse().join('');

  return newStr === revStr;
}

module.exports = isPalindrome;

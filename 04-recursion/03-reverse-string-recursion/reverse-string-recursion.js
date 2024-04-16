function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str[0];
}

module.exports = reverseString;

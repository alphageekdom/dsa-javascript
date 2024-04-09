// function isPalindrome(str) {
//   if (typeof str !== 'string') {
//     throw new Error('Not a valid string');
//   }

//   const newStr = str
//     .slice()
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, '');

//   const revStr = newStr.split('').reverse().join('');

//   return newStr === revStr;
// }

function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());

  const reversedStr = reverseString(formattedStr);

  return formattedStr === reversedStr;
}

// Remove Non Alphanumeric Chars
function removeNonAlphanumeric(str) {
  let formattedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

// Is Alphanumeric
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

// Reverse String
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = isPalindrome;

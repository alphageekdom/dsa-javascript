function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('This is not a string');
  }
  // Copy string and place in array
  const newArr = str.slice().split(' ');

  const result = [];

  //   loop array
  for (let i = 0; i < newArr.length; i++) {
    // split each word into array and chars in own index
    const element = newArr[i].split('');
    //  reverse loop through each array
    for (let j = element.length - 1; j >= 0; j--) {
      // add to result arr
      result.push(element[j]);
    }

    // adds a space after each arrayed word except last
    if (i < newArr.length - 1) {
      result.push(' ');
    }
  }

  //   Joins string including spaces
  const reversed = result.join('');

  return reversed;
}

module.exports = reverseString;

function titleCase(str) {
  const newStr = str.slice().split(' ');

  const strArr = [];

  for (let i = 0; i < newStr.length; i++) {
    const element = newStr[i];
    strArr.push(element[0].toUpperCase() + element.slice(1));
  }

  //   console.log(strArr.join(' '));
  return strArr.join(' ');
}

module.exports = titleCase;

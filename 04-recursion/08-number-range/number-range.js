function numberRange(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : numberRange(startNum, endNum - 1).concat(endNum);
}

module.exports = numberRange;

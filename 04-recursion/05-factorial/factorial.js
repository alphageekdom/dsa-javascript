function factorial(num) {
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
}

module.exports = factorial;

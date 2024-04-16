function power(base, exponent) {
  return exponent === 0 ? 1 : base * power(base, exponent - 1);
}

module.exports = power;

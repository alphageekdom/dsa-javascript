const isValidIPv4 = (str) => {
  const octets = str.split('.');
  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const number = parseInt(octet);
    return number >= 0 && number <= 255 && String(number) === octet;
  });
};

module.exports = isValidIPv4;

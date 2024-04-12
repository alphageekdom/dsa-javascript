function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const countFrequency = (str) => {
    return str.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  };

  const freq1 = countFrequency(str1);
  const freq2 = countFrequency(str2);

  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = validAnagrams;

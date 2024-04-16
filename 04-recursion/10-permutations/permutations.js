function permutations(str) {
  let results = [];

  if (str === 0) {
    results.push('');
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutation = permutations(restOfString);

    for (let j = 0; j < subPermutation.length; j++) {
      results.push(firstChar + subPermutation[j]);
    }
  }
}

module.exports = permutations;

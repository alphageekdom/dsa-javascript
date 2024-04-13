function findMissingLetter(arr) {
  let prev = arr[0].charCodeAt(0);
  const missingCharCode = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - prev > 1) return true;
      prev = current;
    });

  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false;
    const prev = arr[index - 1].charCodeAt(0);
    const current = char.charCodeAt(0);

    return current - prev > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : '';
}

module.exports = findMissingLetter;

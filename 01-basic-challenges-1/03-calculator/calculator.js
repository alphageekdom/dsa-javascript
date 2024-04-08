function calculator(num1, num2, operator) {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    throw new Error('Both parameters are not numbers');
  }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      result = num1 / num2;
      break;

    default:
      throw new Error('Invalid operator');
  }

  return result;
}

module.exports = calculator;

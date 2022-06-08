class Calculator {
  static add = (firstNum, secondNum) => firstNum + secondNum

  static subtract = (firstNum, secondNum) => firstNum - secondNum

  static divide = (firstNum, secondNum) => {
    if (secondNum === 0) {
      return 'Divide by zero error';
    }
    return firstNum / secondNum;
  }

  static multiply = (firstNum, secondNum) => firstNum * secondNum
}

module.exports = Calculator;
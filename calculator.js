class Calculator {
  
  static add = (firstNum, secondNum) => {
    return firstNum + secondNum;
  }

  static subtract = (firstNum, secondNum) => {
    return firstNum - secondNum;
  }

  static divide = (firstNum, secondNum) => {
    if(secondNum == 0) {
      return 'Divide by zero error';
    }
    return firstNum / secondNum;
  }

  static multiply = (firstNum, secondNum) => {
    return firstNum * secondNum;
  }
}

module.exports = Calculator;
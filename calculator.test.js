const Calculator = require('./calculator');

describe('add', () => {
  test('add 2 + 2', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });

  test('add -25 + -20', () => {
    expect(Calculator.add(-25, -20)).toBe(-45);
  });

  test('add 2.5 + 2.3', () => {
    expect(Calculator.add(2.5, 2.3)).toBeCloseTo(4.8);
  });
});

describe('subtract', () => {
  test('subtract 2 - 2000', () => {
    expect(Calculator.subtract(2, 2000)).toBe(-1998);
  });

  test('subtract -25 - -20', () => {
    expect(Calculator.subtract(-25, -20)).toBe(-5);
  });

  test('subtract 2.5 - 2.3', () => {
    expect(Calculator.subtract(2.5, 2.3)).toBeCloseTo(0.2);
  });
});

describe('multiply', () => {
  test('multiply 20 * 20', () => {
    expect(Calculator.multiply(20, 20)).toBe(400);
  });

  test('multiply -25 * -10', () => {
    expect(Calculator.multiply(-25, -10)).toBe(250);
  });

  test('multiply 2.5 * 0', () => {
    expect(Calculator.multiply(2.5, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divide 20 / 0', () => {
    expect(Calculator.divide(20, 0)).toBe('Divide by zero error');
  });
 
  test('divide -25 / -10', () => {
    expect(Calculator.divide(-25, -10)).toBe(2.5);
  });
 
  test('divide 0 / 2.5', () => {
    expect(Calculator.divide(0, 2.5)).toBe(0);
  });
});
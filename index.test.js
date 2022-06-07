const strFunctions = require('./index');

test('test string length', () => {
  expect(strFunctions.stringLength('Felix')).toBe(5);
});

test('test invalid string length', () => {
  expect(strFunctions.stringLength('')).toBe('invalid string length');
});

test('test reversing a string', () => {
  expect(strFunctions.reverseString('Felixo')).toBe('oxileF');
});
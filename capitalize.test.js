const capitalize = require('./capitalize');

test('check capitalized (1)', () => {
  expect(capitalize('felix')).toBe('Felix');
});

test('check capitalized (2)', () => {
  expect(capitalize('arsEnal')).toBe('Arsenal');
});

test('check capitalized (3)', () => {
  expect(capitalize(123)).toBe('Please provide a string');
});

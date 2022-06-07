const stringLength = (str) => {
  const isValid = str.length >= 1 && str.length <= 10;
  if(!isValid)
    return 'invalid string length';

  return str.length;
};

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

module.exports = {stringLength, reverseString};
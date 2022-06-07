const capitalize = (str) => {
  if(typeof str !== 'string')
    return 'Please provide a string';

  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};

module.exports = capitalize;
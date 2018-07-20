const regex = /[^(){}\[\]]/gi;

const balanced = (input) => {
  let string = input.replace(regex, '');

  return string;
};

module.exports = balanced;

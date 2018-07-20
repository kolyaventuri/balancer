const regex = /[^(){}\[\]]/gi;

const AST = require('./AST');

const balanced = (input) => {
  let string = input.replace(regex, '');

  return new AST(string).isValid;
};

module.exports = balanced;

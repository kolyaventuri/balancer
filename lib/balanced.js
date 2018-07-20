const regex = /[^(){}\[\]]/gi;

const closing = ['}', ']', ')'];

const isClosing = (char) => {
  return closing.indexOf(char) > -1;
};

const parens = /^\((.+|)\)/gi;
const square = /^\[(.+|)\]/gi;
const curly  = /^\{(.+|)\}/gi;

class AST {
  constructor(string) {
    this._valid = false;

    this.parse(string);
  }

  parse(string) {
    let parensMatch = parens.exec(string);
    let squareMatch = square.exec(string);
    let curlyMatch  = curly.exec(string);

    parens.lastIndex = 0;
    square.lastIndex = 0;
    curly.lastIndex = 0;

    if(parensMatch) {
      this._valid = new AST(parensMatch[1]).isValid;
    } else if(squareMatch) {
      this._valid = new AST(squareMatch[1]).isValid;
    } else if(curlyMatch) {
      this._valid = new AST(curlyMatch[1]).isValid;
    }

    if(string.trim().length == 0) this._valid = true;
  }

  get isValid() {
    return this._valid;
  }
}

const balanced = (input) => {
  let string = input.replace(regex, '');

  return new AST(string).isValid;
};

module.exports = balanced;

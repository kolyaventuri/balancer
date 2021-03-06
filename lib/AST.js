const parens = /^\((.+|)\)/gi;
const square = /^\[(.+|)\]/gi;
const curly  = /^\{(.+|)\}/gi;

class AST {
  constructor(string) {
    this._valid = false;

    this.parse(string);
  }

  parse(string) {
    if(string.length == 0) {
      return this._valid = true;
    }

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
  }

  get isValid() {
    return this._valid;
  }
}

module.exports = AST;

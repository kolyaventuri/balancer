const regex = /[^(){}\[\]]/gi;

const closing = ['}', ']', ')'];

const isClosing = (char) => {
  return closing.indexOf(char) > -1;
};

const balanced = (input) => {
  let string = input.replace(regex, '');

  let depth = 0;
  for(let i = 0; i < string.length; i++) {
    let char = string[i];

    if(isClosing(char)) {
      depth -= 1;
    } else {
      depth += 1;
    }

    if(depth < 0) return false;
  }

  return depth == 0;
};

module.exports = balanced;

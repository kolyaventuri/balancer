const balanced = require('../lib/balanced');

// balanced('()'); // true
// balanced('(');  // false
// balanced('(())');  // true
// balanced(')(');  // false
// balanced('[](){}'); // true
// balanced('[({})]');   // true
// balanced('[(]{)}'); // false
// balanced('][)(}{'); // false
// balanced('var greeting = { sayHello: hello() }'); // true
// balanced('var sayGoodbye = function() { goodbye();'); // false
describe('Balanced', () => {

  it('returns true for ()', () => {
    expect(balanced('()')).to.be.true;
  });

  it('returns false for (', () => {
    expect(balanced('(')).to.be.false;
  });

  it('returns true for (())', () => {
    expect(balanced('(())')).to.be.true;
  });

  it('returns false for )(', () => {
    expect(balanced(')(')).to.be.false;
  });

  it('returns true for []{}()', () => {
    expect(balanced('[]{}()')).to.be.true;
  });

  it('returns true for [({})]', () => {
    expect(balanced('[({})]')).to.be.true;
  });

  it('returns false for [(]{(}', () => {
    expect(balanced('[(]{)}')).to.be.false;
  });

  it('returns false for ][)(}{', () => {
    expect(balanced('][)(}{')).to.be.false;
  });

  it('returns true for "var greeting = { sayHello: hello() }', () => {
    expect(balanced('var greeting = { sayHello: hello() }')).to.be.true;
  });

  it('returns false for "var sayGoodbye = function() { goodbye();"', () => {
    expect(balanced('var sayGoodbye = function() { goodbye();')).to.be.false;
  });
});

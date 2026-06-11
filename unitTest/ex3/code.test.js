// ex3/code.test.js
const { simplify } = require('./code');

describe('simplify', () => {
  it('should remove all specified symbols (!, #, ., ,, \') from the string', () => {
    
    expect(simplify("Hello, world!")).toBe("Hello world");
    
    expect(simplify("!#.,'")).toBe("");
    
    expect(simplify("Clean string 123")).toBe("Clean string 123");
    
    expect(simplify("It's #1. Period.")).toBe("Its 1 Period");
    
    expect(simplify("")).toBe("");
  });
});
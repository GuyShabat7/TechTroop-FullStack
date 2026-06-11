// ex3/code.test.js
const { simplify } = require('./code');

describe('simplify', () => {
  test('should remove all specified symbols (!, #, ., ,, \') from the string', () => {
    
    expect(simplify("Hello, world!")).toBe("Hello world");
    
    expect(simplify("!#.,'")).toBe("");
    
    expect(simplify("Clean string 123")).toBe("Clean string 123");
    
    expect(simplify("It's #1. Period.")).toBe("Its 1 Period");
    
    expect(simplify("")).toBe("");
  });

  test('should throw an error or handle invalid data types safely', () => {
    expect(() => simplify(null)).toThrow();
    expect(() => simplify(undefined)).toThrow();
    expect(() => simplify()).toThrow();
    
    expect(() => simplify(12345)).toThrow();
    
    expect(() => simplify({ text: "Hello" })).toThrow();
  });
});
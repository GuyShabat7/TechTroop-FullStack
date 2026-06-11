// ex4/code.test.js
const { validate } = require('./code');

describe('validate', () => {
  test('should return an error object if there are no booleans in the array', () => {
    expect(validate([])).toEqual({ error: "Need at least one boolean" });
    expect(validate([1, "hello", null, {}])).toEqual({ error: "Need at least one boolean" });
  });

  test('should return true if there are more trues than falses', () => {
    expect(validate([true, true, false])).toBe(true);
    expect(validate([true, "not a boolean", false, true])).toBe(true);
  });

  test('should return false if there are more falses than trues', () => {
    expect(validate([false, false, true])).toBe(false);
    expect(validate([false])).toBe(false);
  });

  test('should return false if the amount of trues and falses is equal', () => {
    expect(validate([true, false])).toBe(false);
    expect(validate([true, true, false, false])).toBe(false);
  });
});
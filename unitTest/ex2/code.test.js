const { removeAtLeastOne } = require('./code');

describe('removeAtLeastOne in ex2', () => {
  test('should remove at least one element from the array', () => {
    const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const originalLength = arr.length;

    const result = removeAtLeastOne(arr);

    expect(result.length).toBeLessThan(originalLength);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toBe(arr);
  });

  test('should handle invalid inputs, empty arrays, or missing parameters safely', () => {
    expect(() => removeAtLeastOne()).toThrow();
    
    expect(() => removeAtLeastOne("not an array")).toThrow();
    expect(() => removeAtLeastOne(123)).toThrow();

    const emptyArr = [];
    expect(removeAtLeastOne(emptyArr)).toEqual([]);
  });
});
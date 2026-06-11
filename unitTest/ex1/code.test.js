const Exercises = require('./code');

describe('Exercises Class Tests', () => {
    const exercises = new Exercises();

    describe('isEven', () => {
        test('should return truthy when n is an even number', () => {
            expect(exercises.isEven(2)).toBeTruthy();
            expect(exercises.isEven(0)).toBeTruthy();
            expect(exercises.isEven(-4)).toBeTruthy();
        });

        test('should return falsy when n is an odd number', () => {
            expect(exercises.isEven(3)).toBeFalsy();
            expect(exercises.isEven(-1)).toBeFalsy();
        });
    })
})
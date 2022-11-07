import { sum } from './sample.js';

describe('Given sum function', () => {
    const value1 = 2;
    const value2 = 5;
    describe('When arguments are 2 and 5', () => {
        test('Then result should be 7', () => {
            const expected = 7;
            const r = sum(value1, value2);
            expect(r).toBe(expected);
        });
    });
});

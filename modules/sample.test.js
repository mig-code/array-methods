import { sum } from './sample';

describe('Given sum function', () => {
    const value1 = 3;
    const value2 = 5;
    describe('When arguments are 3 and 5', () => {
        test('Then result should be 8', () => {
            const expected = 8;
            const r = sum(value1, value2);
            expect(r).toBe(expected);
        });
    });
});

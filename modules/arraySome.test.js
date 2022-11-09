import { arraySome } from './arraySome.js';
const cases = [
    { arr: [1, 5, 3], funct: (x) => x % 2 === 0, expected: false },
    { arr: [1, 2, 3], funct: (x) => x === 3, expected:true },
    { arr: [], funct: (x) => x === 1, expected: false },
    { arr: ['a', 'b', 'c'], funct: (x) => x === 1, expected: false },
];
describe('Given arraySome function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arraySome(item.arr, item.funct);
            expect(r).toBe(expected);
        });
    });
});

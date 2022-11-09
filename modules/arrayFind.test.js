import { arrayFind } from './arrayFind.js';
const cases = [
    { arr: [1, 5, 3], funct: (x) => x % 2 === 0, expected: undefined },
    { arr: [1, 2, 3], funct: (x) => x === 2, expected:2 },
    { arr: [], funct: (x) => x === 1, expected: undefined },
];
describe('Given arrayFind function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayFind(item.arr, item.funct);
            expect(r).toBe(expected);
        });
    });
});

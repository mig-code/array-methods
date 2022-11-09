import { arrayFindIndex } from './arrayFindIndex.js';
const cases = [
    { arr: [1, 5, 3], funct: (x) => x % 2 === 0, expected: -1 },
    { arr: [1, 2, 3], funct: (x) => x === 2, expected: 1 },
    { arr: [1, 2, 3], funct: (x) => x === 3, expected: 2 },
    { arr: [], funct: (x) => x === 1, expected: -1 },
];
describe('Given arrayFind function', () => {
    cases.forEach((item) => {
        test(`Then result of findINDEX ${item.funct} from ${item.arr} should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayFindIndex(item.arr, item.funct);
            expect(r).toBe(expected);
        });
    });
});

import { arrayEvery } from './arrayEvery';
const cases = [
    { arr: [2, 4, 6], funct: (x) => x % 2 === 0, expected: true },
    { arr: [1, 2, 3], funct: (x) => x < 4, expected: true },
    { arr: [], funct: (x) => x === 1, expected: true },
    { arr: ['a', 'b', 'c'], funct: (x) => x === 'a', expected: false },
];
describe('Given arrayEvery function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayEvery(item.arr, item.funct);
            expect(r).toBe(expected);
        });
    });
});

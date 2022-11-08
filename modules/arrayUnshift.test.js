import { arrayUnshift } from './arrayUnshift.js';

const cases = [
    {
        arr: [1, 2, 3],
        input: [4],
        expected: [4, 1, 2, 3],
        expectedLength: 4,
    },
    {
        arr: [1, 2, null],
        input: [undefined, 3],
        expected: [undefined, 3, 1, 2, null],
        expectedLength: 5,
    },
    {
        arr: ['a', ' b', 'c'],
        input: ['d'],
        expected: ['d', 'a', ' b', 'c'],
        expectedLength: 4,
    },
    {
        arr: [1, 2, 3],
        input: [4, 5, ['a', 'b'], 6],
        expected: [4, 5, ['a', 'b'], 6, 1, 2, 3],
        expectedLength: 7,
    },
    {
        arr: [],
        input: [],
        expected: [],
        expectedLength: 0,
    },
];

describe('Given arrayUnshift function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.arr} unshift ${item.input}  equal to ${item.expected} and return ${item.expectedLength}`, () => {
            const expected = item.expected;
            const r = item.arr;
            const length = arrayUnshift(item.arr, ...item.input);
            expect(r).toEqual(expected);
            expect(length).toEqual(item.expectedLength);
        });
    });
});

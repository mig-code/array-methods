import { arrayPush } from './arrayPush.js';

const cases = [
    {
        arr: [1, 2, 3],
        input: [4],
        expected: [1, 2, 3, 4],
        expectedLength: 4,
    },
    {
        arr: [1, 2, null],
        input: [undefined, 3],
        expected: [1, 2, null, undefined, 3],
        expectedLength: 5,
    },
    {
        arr: ['a', ' b', 'c'],
        input: ['d'],
        expected: ['a', ' b', 'c', 'd'],
        expectedLength: 4,
    },
    {
        arr: [1, 2, 3],
        input: [4, 5, ['a', 'b'], 6],
        expected: [1, 2, 3, 4, 5, ['a', 'b'], 6],
        expectedLength: 7,
    },
    {
        arr: [1, 2, 3],
        input: [],
        expected: [1, 2, 3],
        expectedLength: 3,
    },
];

describe('Given arrayPush function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.arr} push ${item.input}  equal to ${item.expected}`, () => {
            const expected = item.expected;
            const r = item.arr;
            const length = arrayPush(item.arr, ...item.input);
            expect(r).toEqual(expected);
            expect(length).toEqual(item.expectedLength);
        });
    });
});

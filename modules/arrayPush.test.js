import { arrayPush } from './arrayPush.js';

const cases = [
    {
        arr: [1, 2, 3],
        input: [4],
        expected: [1, 2, 3, 4],
    },
    {
        arr: [1, 2, null],
        input: [undefined, 3],
        expected: [1, 2, null, undefined, 3],
    },
    {
        arr: ['a', ' b', 'c'],
        input: ['d'],
        expected: ['a', ' b', 'c', 'd'],
    },
    {
        arr: [1, 2, 3],
        input: [4, 5, ['a', 'b'], 6],
        expected: [1, 2, 3, 4, 5, ['a', 'b'], 6],
    },
];

describe('Given arrayPush function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.arr} push ${item.input}  equal to ${item.expected}`, () => {
            const expected = item.expected;
            const r = item.arr;

            arrayPush(item.arr, ...item.input);
            expect(r).toEqual(expected);
        });
    });
});

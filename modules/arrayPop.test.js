import { arrayPop } from './arrayPop';
const cases = [
    {
        arr: [1, 2, 3],
        expected: [1, 2],
    },

    {
        arr: [],
        expected: [],
    },
    {
        arr: [1, 2, ['a', 'b']],
        expected: [1, 2],
    },
];

describe('Given arrayPop function', () => {
    cases.forEach((item) => {
        test(`Then result of pop ${item.arr} should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = item.arr;
            arrayPop(item.arr);
            expect(r).toEqual(expected);
        });
    });
});

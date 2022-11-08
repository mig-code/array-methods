import { arrayPop } from './arrayPop';
const cases = [
    {
        arr: [1, 2, 3],
        expected: [1, 2],
        lastElement: 3,
    },

    {
        arr: [],
        expected: [],
        lastElement: undefined,
    },
    {
        arr: [1, 2, ['a', 'b']],
        expected: [1, 2],
        lastElement: ['a', 'b'],
    },
];

describe('Given arrayPop function', () => {
    cases.forEach((item) => {
        test(`Then result of pop ${item.arr} should be ${item.expected} and return last element ${item.lastElement}`, () => {
            const expected = item.expected;
            const r = item.arr;
            const lastElement = arrayPop(item.arr);
            expect(r).toEqual(expected);
            expect(lastElement).toEqual(item.lastElement);
        });
    });
});

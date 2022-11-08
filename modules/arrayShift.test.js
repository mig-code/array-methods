import { arrayShift } from './arrayShift.js';
const cases = [
    {
        arr: [1, 2, 3],
        expected: [2, 3],
        firstElement: 1,
    },

    {
        arr: [],
        expected: [],
        firstElement: undefined,
    },
    {
        arr: [1, 2, ['a', 'b']],
        expected: [2, ['a', 'b']],
        firstElement: 1,
    },
];

describe('Given arrayShift function', () => {
    cases.forEach((item) => {
        test(`Then result of shift ${item.arr} should be ${item.expected} and return first element ${item.firstElement}`, () => {
            const expected = item.expected;
            const r = item.arr;
            const firstElement = arrayShift(item.arr);
            expect(r).toEqual(expected);
            expect(firstElement).toEqual(item.firstElement);
        });
    });
});

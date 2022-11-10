import { arrayReduce } from './arrayReduce';
const cases = [
    {
        arr: [1, 2, 3, 4],
        function: (acc, item) => acc * item,
        initialValue: 0,
        expected: 0,
    },
    {
        arr: [0, 1, 2, 3, 4],
        function: (acc, item) => acc * item,
        initialValue: 1,
        expected: 0,
    },
    // THIS EXAMPLE NEEDS TO BE FIXED
    // {
    //     arr: [1],
    //     function: (acc, item) => acc * item,
    //     initialValue: undefined,
    //     expected: 1,
    // },
    {
        arr: ['a', 'b', 'c', 'd'],
        function: (acc, item) => acc + item,
        initialValue: undefined,
        expected: 'abcd',
    },
];
const errorCases = [
    {
        arr: [],
        function: (acc, item) => acc * item,
        expected: 'Empty array',
    },
];

describe('Given arrayJoin function', () => {
    cases.forEach((item) => {
        test(`Then result of Reduce ${item.arr} with ${item.function} should be ${item.expected}`, () => {
            const expected = item.arr.reduce(item.function, item.initialValue);
            // const expected = item.expected;
            const r = arrayReduce(item.arr, item.function, item.initialValue);
            expect(r).toEqual(expected);
        });
    });

    test(`Given arrayReduce of empty Array return error ${errorCases[0].expected}`, () => {
        const expected = errorCases[0].expected;

        expect(() => {
            arrayReduce(errorCases[0].arr, errorCases[0].funct);
        }).toThrow(expected);
    });
});

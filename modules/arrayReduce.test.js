import { arrayReduce } from './arrayReduce';

// I have to use two cases because if i use always initial value the function will take three arguments and will not work
const casesWithoutInitial = [
    {
        arr: [1, 2, 3, 4],
        function: (acc, item) => acc * item,
        expected: 0,
    },
    {
        arr: [0, 1, 2, 3, 4],
        function: (acc, item) => acc * item,
        expected: 0,
    },

    {
        arr: [1],
        function: (acc, item) => acc * item,
        expected: 1,
    },
    {
        arr: ['a', 'b', 'c', 'd'],
        function: (acc, item) => acc + item,
        expected: 'abcd',
    },
];
const casesWithInitial = [
    {
        arr: [1, 2, 3, 4],
        function: (acc, item) => acc * item,
        initialValue: 1,
        expected: 24,
    },
    {
        arr: ['a', 'b', 'c', 'd'],
        function: (acc, item) => acc + item,
        initialValue: 'b',
        expected: 'bbcd',
    },
    {
        arr: [1],
        function: (acc, item) => acc * item,
        initialValue: 4,
        expected: 4,
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
    casesWithoutInitial.forEach((item) => {
        test(`Then result of Reduce  ${item.arr} WITHOUT INITIAL VALUE with ${item.function} should be ${item.expected}`, () => {
            const expected = item.arr.reduce(item.function);
            const r = arrayReduce(item.arr, item.function);
            expect(r).toEqual(expected);
        });
    });
    casesWithInitial.forEach((item) => {
        test(`Then result of Reduce ${item.arr} WITH INITIAL VALUE with ${item.function} should be ${item.expected}`, () => {
            // I tested with 2 different ways to get the expected result
            const expected = item.expected;
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

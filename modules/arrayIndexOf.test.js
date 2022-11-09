import { arrayIndexOf } from './arrayIndexOf.js';
const cases = [
    { arr: [1, 5, 3], element: 0, expected: -1 },
    { arr: [1, 2, 3], element: 2, expected: 1 },
    { arr: [1, 2, 3], element: 3, expected: 2 },
    { arr: [], element: 1, expected: -1 },
    {arr: [1, 2, NaN], element: NaN, expected: -1},
];
describe('Given arrayIndexOf function', () => {
    cases.forEach((item) => {
        test(`Then result of IndexOf ${item.element} from ${item.arr} should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayIndexOf(item.arr, item.element);
            expect(r).toBe(expected);
        });
    });
});

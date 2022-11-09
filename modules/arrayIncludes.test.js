import { arrayIncludes } from './arrayIncludes.js';
const cases = [
    { arr: [1, 5, 3], element: 0, expected: false },
    { arr: [1, 2, 3], element: 2, expected: true },
    { arr: [1, 2, 3], element: 3, expected: true },
    { arr: [], element: 1, expected: false },
    { arr: [1, 2, NaN], element: NaN, expected: true },
    { arr: [0, NaN, 'Luis'], element: -0, expected: true },
    { arr: [-0, NaN, 'Luis'], element: 0, expected: true },
];
describe('Given arrayIncludes function', () => {
    cases.forEach((item) => {
        test(`Then result of IndexOf ${item.element} from ${item.arr} should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayIncludes(item.arr, item.element);
            expect(r).toBe(expected);
        });
    });
});

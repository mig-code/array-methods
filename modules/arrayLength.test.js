import { arrayLength } from './arrayLength.js';
const cases = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [true, false, undefined, {}, null],
    [undefined, undefined],
];
describe('Given arrayLength function', () => {
    cases.forEach((item) => {
        test(`Then result should be ${item.length}`, () => {
            const expected = item.length;
            const r = arrayLength(item);
            expect(r).toBe(expected);
        });
    });
});

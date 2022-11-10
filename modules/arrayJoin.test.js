import { arrayJoin } from './arrayJoin.js';
const cases = [
    { arr: [1, 2, 3, 4], expected: '1,2,3,4' },
    { arr: ['a', 'b', 'c', 'd'], separator: ' ', expected: 'a b c d' },
    { arr: [], separator: '-', expected: '' },
    {
        arr: ['Juan', 'Pepe', 'Miguel', 'Antonio'],
        separator: '-',
        expected: 'Juan-Pepe-Miguel-Antonio',
    },
];
describe('Given arrayJoin function', () => {
    cases.forEach((item) => {
        test(`Then result of Join ${item.arr} with ${item.separator} should be ${item.expected}`, () => {
            const expected = item.arr.join(item.separator);
            const r = arrayJoin(item.arr, item.separator);
            expect(r).toEqual(expected);
        });
    });
});

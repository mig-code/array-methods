import { arrayFilter } from './arrayFilter.js';
const cases = [
    { arr: [1, 2, 3, 4], funct: (x) => x % 2 === 0, expected: [2, 4] },
    { arr: [1, 2, 3], funct: (x) => x === 2, expected: [2] },
    { arr: [], funct: (x) => x === 1, expected: [] },
    {arr:["Juan","Pepe","Miguel","Antonio"],funct:(x)=>x.length>4,expected:["Miguel","Antonio"]},
];
describe('Given arrayFind function', () => {
    cases.forEach((item) => {
        test(`Then result of filter ${item.funct} from ${item.arr} should be ${item.expected}`, () => {
            const expected = item.expected;
            const r = arrayFilter(item.arr, item.funct);
            expect(r).toEqual(expected);
        });
    });
});

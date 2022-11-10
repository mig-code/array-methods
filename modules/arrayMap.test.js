import { arrayMap } from './arrayMap.js';
const cases = [
    { arr: [1, 2, 3, 4], funct: (x) => x * 2, expected: [2, 4, 6, 8] },
    { arr: ['a', 'b', 'c'], funct: (x) => x * 2, expected: [NaN, NaN, NaN] },
    { arr: [1], funct: (x) => x === 1, expected: [true] },
    {
        arr: ['Juan', 'Pepe', 'Miguel', 'Antonio'],
        funct: (name) => 'Nombre: ' + name,
        expected: [
            'Nombre: Juan',
            'Nombre: Pepe',
            'Nombre: Miguel',
            'Nombre: Antonio',
        ],
    },
];
const errorCases = [
    { arr: 3, funct: (x) => x * 2, expected: 'There is no array' },
];
describe('Given arrayFind function', () => {
    cases.forEach((item) => {
        test(`Then result of Map ${item.arr} with ${item.function} should be ${item.expected}`, () => {
            const expected = item.arr.map(item.funct);
            const r = arrayMap(item.arr, item.funct);
            expect(r).toEqual(expected);
        });
    });
    test('Given arrayMap of not Object es No válido', () => {
        const expected = errorCases[0].expected;

        expect(() => {
            arrayMap(errorCases[0].arr, errorCases[0].funct);
        }).toThrow(expected);
    });
});

import { arrayLength } from './arrayLength.js';
export function arrayReduce(arr, callback, initialValue) {
    let accumulate = arrayLength(arguments) > 2 ? initialValue : arr[0];

    if (arrayLength(arr) === 0 && arrayLength(arguments) === 2)
        throw new Error('Empty array');

    if (arrayLength(arr) === 1) {
        arrayLength(arguments) === 2
            ? (accumulate = arr[0])
            : (accumulate = callback(initialValue, arr[0]));
        return accumulate;
    }

    for (let i = 1; i < arrayLength(arr); i++) {
        accumulate = callback(accumulate, arr[i]);
    }
    return accumulate;
}

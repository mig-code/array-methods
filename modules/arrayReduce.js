import { arrayLength } from './arrayLength.js';
export function arrayReduce(arr, callback, initialValue) {
    let accumulate = initialValue;

    if (arrayLength(arr) === 0) throw new Error('Empty array');

    // NOT WORKING
    if (arrayLength(arr) === 1) {
        return initialValue === undefined ? NaN : initialValue;
    }

    for (let i = 0; i < arrayLength(arr); i++) {
        accumulate = callback(accumulate, arr[i]);
    }
    return accumulate;
}
// NEEDS TO BE FIXED FOR ARRAY OF 1 ELEMENT

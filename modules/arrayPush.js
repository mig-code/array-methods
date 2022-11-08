import { arrayLength } from './arrayLength.js';

export function arrayPush(arr) {
    for (let i = 1; i < arrayLength(arguments); i++) {
        arr[arrayLength(arr)] = arguments[i];
    }
    return arrayLength(arr);
}

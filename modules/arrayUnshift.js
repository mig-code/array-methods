import { arrayLength } from './arrayLength.js';

export function arrayUnshift(arr) {
    const length = arrayLength(arr) + arrayLength(arguments) - 1;
    for (let i = length - 1; i >= 0; i--) {
        arr[i] =
            i < arrayLength(arguments) - 1
                ? arguments[i + 1]
                : arr[i - arrayLength(arguments) + 1];
    }

    return arrayLength(arr);
}

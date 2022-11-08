import { arrayLength } from './arrayLength.js';

export function arrayPush(arr) {
    for (let i = 1; i < arrayLength(arguments); i++) {
        arr[arrayLength(arr)] = arguments[i];
    }
    return arrayLength(arr);
}

const arr = [];
const lenght = arrayPush(arr, 3, 4, 5);
console.log(arr);
console.log(lenght);

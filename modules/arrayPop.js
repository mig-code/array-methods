import { arrayLength } from './arrayLength.js';

export function arrayPop(arr) {
    const length = arrayLength(arr) ? arrayLength(arr) - 1 : 0;
    const lastElement = arrayLength(arr) ? arr[length] : undefined;
    Object.defineProperty(arr, 'length', { value: length });
    return lastElement;
}

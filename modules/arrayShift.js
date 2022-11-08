import { arrayLength } from './arrayLength.js';

export function arrayShift(arr) {
    const length = arrayLength(arr) ? arrayLength(arr) - 1 : 0;
    const firstElement = arrayLength(arr) ? arr[0] : undefined;
    for (let i = 0; i < length; i++) {
        arr[i] = arr[i + 1];
    }
    Object.defineProperty(arr, 'length', { value: length });
    return firstElement;
}

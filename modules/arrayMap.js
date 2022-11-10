import { arrayPush } from './arrayPush.js';
export function arrayMap(arr, callback) {
    const result = [];
    if (typeof arr !== 'object') throw new Error('There is no array');
    for (const i in arr) {
        arrayPush(result, callback(arr[i]));
    }
    return result;
}

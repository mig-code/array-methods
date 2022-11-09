import { arrayPush } from './arrayPush.js';
export function arrayFilter(arr, callback) {
    const result = [];
    for (const i in arr) {
        if (callback(arr[i])) {
            arrayPush(result, arr[i]);
        }
    }
    return result;
}
// TODO not working with return not matching


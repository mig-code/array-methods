export function arrayFindIndex(arr, callback) {
    for (const i in arr) {
        if (callback(arr[i])) {
            return Number(i);
        }
    }
    return -1;
}

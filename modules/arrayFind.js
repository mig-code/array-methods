export function arrayFind(arr, callback) {
    for (const i of arr) {
        if (callback(i)) {
            return i;
        }
    }
    return undefined;
}

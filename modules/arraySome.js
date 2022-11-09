export function arraySome(arr, callback) {
    for (const i of arr) {
        if (callback(i)) {
            return true;
        }
    }
    return false;
}

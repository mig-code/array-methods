export function arrayIncludes(arr, elem) {
    for (const i in arr) {
        if (arr[i] === elem) {
            return true;
        }
        if (isNaN(arr[i]) && isNaN(elem)) {
            return true;
        }
    }
    return false;
}

export function arrayIndexOf(arr, elem) {
    for (const i in arr) {
        if (arr[i] === elem) {
            return Number(i);
        }
    }
    return -1;
}

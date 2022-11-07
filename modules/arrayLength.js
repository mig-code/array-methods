export function arrayLength(arr = []) {
    let length = 0;
    while (arr[length] !== undefined) {
        length++;
    }
    return length;
}

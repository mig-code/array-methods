export function arrayLength(arr) {
    let length = 0;
    for (const i in arr) {
        length = Number(i) + 1;
    }
    return length;
}

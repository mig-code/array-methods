export function arrayJoin(arr, separator) {
    let result = '';
    const arraySeparator = separator || ',';
    if (arr.length === 0) {
        return result;
    }
    for (const i in arr) {
        if (Number(i) === 0) {
            result = arr[i];
        } else {
            result = result + arraySeparator + arr[i];
        }
    }
    return result;
}

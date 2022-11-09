export function arrayEvery(arr, callback) {
    for (const i of arr) {
        if (!callback(i)) {
            return false;
        }
    }
    return true;
}

console.log([1].every((x) => x === 4));

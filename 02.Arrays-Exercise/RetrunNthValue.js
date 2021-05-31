function solve(arr, n) {
    result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }

    return result;
}
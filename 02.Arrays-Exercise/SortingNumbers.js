function solve(arr) {
    arr.sort((a,b) => a - b);
    let sortedArray = [];

    while (arr.length > 0) {
        sortedArray.push(arr.shift());
        sortedArray.push(arr.pop());
    }

    return sortedArray;
}
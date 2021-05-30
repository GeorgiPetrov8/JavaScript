function solve(arr, firstPie, lastPie) {
    result = arr.slice(arr.indexOf(firstPie), arr.indexOf(lastPie) + 1);
    return result;
}
function solve(arr) {
    arr.sort((a,b) => a.localeCompare(b));
    for (let i = 0; i < arr.length; i++) {
        let numeric = Number(i + 1);
        console.log(numeric + '.' + arr[i])
    }
}
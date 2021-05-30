function solve(arr) {
    let oddNumbers = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddNumbers.unshift(2 * arr[i]);
    }
    console.log(oddNumbers);
}
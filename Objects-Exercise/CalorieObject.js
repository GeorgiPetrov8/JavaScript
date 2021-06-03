function solve(arr) {
    let output = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        output[arr[i]] = Number(arr[i + 1]);
    }

    console.log(output);
}
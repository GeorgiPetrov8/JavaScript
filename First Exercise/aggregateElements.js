function solve(arr) {
    let sum = 0;
    let concat = "";
    let inverseValuesSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        concat += arr[i];
        inverseValuesSum += 1 / arr[i];
    }
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concat);
}
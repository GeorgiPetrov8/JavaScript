function solve(num1, num2, num3) {
    let largestNumber = undefined;

    if (num1 > num2) {
        largestNumber = num1;
    } else {
        largestNumber = num2;
    }

    if (num3 > largestNumber) {
        largestNumber = num3;
    }
    console.log(`The largest number is ${largestNumber}.`);
}

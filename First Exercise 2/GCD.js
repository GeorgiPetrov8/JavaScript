function solve(num1, num2) {
    let smallerNumber = Math.min(num1, num2);
    let gCD = 0;
    for (let i = 0; i <= smallerNumber; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gCD = i;
        }
    }
    console.log(gCD);
}
function solve(num) {
    let isAllDigitsEqual = true;
    let input = num.toString();

    let digit = input.charAt(0)
    let sum = Number(digit);
    for (let i = 1; i < input.length; i++){
        sum += Number(input.charAt(i));
        if(input[i] != digit) {
            isAllDigitsEqual = false;
        }
    }
    
    console.log(isAllDigitsEqual);
    console.log(sum);
}
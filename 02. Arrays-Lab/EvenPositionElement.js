function solve(numbers) {
    let result = '';
    for (let i = 0; i < numbers.length; i += 2) {
        result += numbers[i] + ' ';
    }
    console.log(result);
}
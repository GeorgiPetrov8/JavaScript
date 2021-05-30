function solve(matrix) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (const arr of matrix) {
        for (const number of arr) {
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
    }

    return maxNumber;
}
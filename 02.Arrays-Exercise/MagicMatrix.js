function solve(matrix) {
    let sum = matrix[0].reduce((acc, curr) => acc + curr);
    for (let row = 1; row < matrix.length; row++) {
        let currSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            currSum += matrix[row][col];
        }

        if (sum != currSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currSum += matrix[row][col];
        }

        if (currSum != sum) {
            return false;
        }

    }
    return true;
}
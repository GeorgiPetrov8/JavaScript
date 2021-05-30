function solve(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix.length; col++) {
            let upNumber = matrix[row][col];
            let downNumber = matrix[row + 1][col];
            if (upNumber == downNumber) {
                count++;
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row] - 1; col++) {
            let currNumber = matrix[row][col];
            let rightNumber = matrix[row][col + 1];
            if (currNumber == rightNumber) {
                count++;
            }
        }
    }

    return count;
}
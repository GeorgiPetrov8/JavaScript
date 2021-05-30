function solve(matrix) {
    let firstDiagonal = 0;
    let secontDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
    }
    for (let i = 0; i < matrix.length; i++) {
        secontDiagonal += matrix[i][matrix[i].length - 1 - i];
    }
    console.log(firstDiagonal + ' ' + secontDiagonal);
}
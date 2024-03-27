function matrixDiagonalDifference(matrix) {
    // Calculate the sum of the main diagonal
    let mainDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
    }

    // Calculate the sum of the anti-diagonal
    let antiDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        antiDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    // Calculate the difference between the two sums and return the result
    return Math.abs(mainDiagonalSum - antiDiagonalSum);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrixDiagonalDifference(matrix)); // Output: 3
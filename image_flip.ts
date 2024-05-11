//flip image horizontally
function flipImageHorizontal(matrix: number[][]): number[][] {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let flippedMatrix: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        flippedMatrix[i] = [];
        for (let j = 0; j < numCols; j++) {
            // Flip each row horizontally
            flippedMatrix[i][j] = matrix[i][numCols - 1 - j];
        }
    }

    return flippedMatrix;
}

//flip vertically
function flipImageVertical(matrix: number[][]): number[][] {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let flippedMatrix: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        flippedMatrix[i] = [];
        for (let j = 0; j < numCols; j++) {
            // Flip each column vertically
            flippedMatrix[i][j] = matrix[numRows - 1 - i][j];
        }
    }

    return flippedMatrix;
}


let imageMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flipHorizontal = flipImageHorizontal(imageMatrix);
console.log("Flipped Image:", flipHorizontal);

const flipVertical = flipImageVertical(imageMatrix);
console.log("Flipped Image:", flipVertical);

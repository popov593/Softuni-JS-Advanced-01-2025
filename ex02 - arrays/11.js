function diagonal(input) {

    let matrix = input.map(

        row => row ? row.split(' ').map(Number) : []

    );

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {

        sumFirstDiagonal += matrix[i][i];
        sumSecondDiagonal += matrix[i][matrix.length - i - 1];

    }

    if (sumFirstDiagonal === sumSecondDiagonal) {

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {

                if (i !== j && i !== matrix.length - j - 1) {

                    matrix[i][j] = sumFirstDiagonal;

                }

            }

        }

    }

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i].join(' '));
    }

    return result.join('\n');

}

console.log(diagonal(

    ['1 1 1', '1 1 1', '1 1 0']

));
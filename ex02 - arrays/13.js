function generateMatrix(width, height) {

    let matrix = new Array(height).fill().map(
        () => new Array(width).fill(0)
    );

    let value = 1;
    let leftLimit = 0
    let topLimit = 0;

    let bottomLimit = height - 1;
    let rightLimit = width - 1;

    while (value <= width * height) { 

        for (let col = leftLimit; col <= rightLimit; col++) {
            matrix[topLimit][col] = value++;
        }
        topLimit++;

        for (let row = topLimit; row <= bottomLimit; row++) {
            matrix[row][rightLimit] = value++;
        }
        rightLimit--;

        if (topLimit <= bottomLimit) {
            for (let col = rightLimit; col >= leftLimit; col--) {
                matrix[bottomLimit][col] = value++;
            }
            bottomLimit--;
        }

        if (leftLimit <= rightLimit) {
            for (let row = bottomLimit; row >= topLimit; row--) {
                matrix[row][leftLimit] = value++;
            }
            leftLimit++
        }

    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }

}

generateMatrix(4, 4);
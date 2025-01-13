function orbit([width, height, x, y]) {
    
    let matrix = new Array(height).fill().map(

        () => new Array(width).fill(0)

    );

    for (let row = 0; row < height; row++) {

        for (let col = 0; col < width; col++) {

            let distanceRow = Math.abs(row - x);
            let distanceCol = Math.abs(col - y);

            let maxDistance = Math.max(distanceRow, distanceCol);

            matrix[row][col] = maxDistance + 1;

        }

    }

    console.log(
        matrix.map(row => row.join(" ")).join("\n")
    );

}

orbit([3, 3, 2, 2]);
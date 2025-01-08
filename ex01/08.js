function validityChecker (x1, y1, x2, y2) {

    let result = function (x1, y1, x2, y2) {

        let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        if (Number.isInteger(distance)) {
            //valid
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            //not valid
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }

    }

    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);

}

//validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
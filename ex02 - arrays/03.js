function solve(arr) {

    let num = 1;

    let result = [];

    arr.forEach(el => {

        if (el === 'add') {
            result.push(num);
        } else if (el === 'remove') {
            result.pop();
        }

        num++;

    });

    if (result.length >= 1) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }


}

solve(['remove', 'remove', 'remove']);
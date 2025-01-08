function uppercase(input) {

    const arr = [];

    const pattern = /\w+/g;

    while (valid = pattern.exec(input)) {

        arr.push(valid[0].toUpperCase());
    }

    console.log(arr.join(', '));

}

uppercase();

function upperCase(input) {
    let pattern = /\w+/g;
    let matchResult = input.match(pattern);
    let result = matchResult.map(el => el.toUpperCase());
    
    console.log(result.join(', '));
}

upperCase();
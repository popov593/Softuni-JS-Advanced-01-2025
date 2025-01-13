function print(strings, step) {

    let result = [];

    for (let i = 0; i < strings.length; i++) {

        if (i % step === 0) {

            result.push(strings[i]);

        }

    }

    return result;

}

console.log(print(['1', '2', '3', '4', '5'], 6));

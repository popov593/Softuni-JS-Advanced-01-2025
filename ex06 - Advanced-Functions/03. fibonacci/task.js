let num1 = 5;

console.log(num1);

function fibonacci() {
    let num1 = 0;
    let num2 = 1;

    console.log(num1);

    return function fib() {

        let result = num1 + num2;
        num1 = num2;

        console.log(num1);

        num2 = result;
        return num1;

    }

}

console.log(num1);
function same(number1) {

    let number = number1.toString().split('');

    let sum = 0;

    let sameNum = true;

    for (let i = 0; i < number.length; i++) {

        sum += Number(number[i]);

        if (number[0] !== number[i]) {
            sameNum = false;
        }

    }

    if (sameNum == true) {
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(sum);

}

same(2222222);
same(1234);
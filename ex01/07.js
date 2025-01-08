function coocking(num, comand1, comand2, comand3, comand4, comand5) {

    let result = [];

    let arr = [comand1, comand2, comand3, comand4, comand5];

    let number = Number(num);

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {

            case 'chop':
                number = number / 2;
                result.push(Number(number.toFixed(1)));
                break;
            case 'dice':
                number = Math.sqrt(number);
                result.push(Number(number.toFixed(1)));
                break;
            case 'spice':
                number += 1;
                result.push(Number(number.toFixed(1)));
                break;
            case 'bake':
                number = number * 3;
                result.push(Number(number.toFixed(1)));
                break;
            case 'fillet':
                number = number * 0.8;
                result.push(Number(number.toFixed(1)));
                break;
            default:
                console.log(`Invalid`);
                break;

        }        
    }

    console.log(result.join('\n'));

}

//coocking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coocking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
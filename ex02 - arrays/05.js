function increase(arr) {

    let result = [];

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] >= biggest) {
            result.push(arr[i]);

            biggest = arr[i];
        }

    }

    return result;
}

console.log(increase([1,

    3,
    
    8,
    
    4,
    
    10,
    
    12,
    
    3,
    
    2,
    
    24]));
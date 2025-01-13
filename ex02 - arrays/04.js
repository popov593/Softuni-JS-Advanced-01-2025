function solve(arr, num) {

    for (let i = 0; i < num; i++) {

        arr.unshift(arr.pop());

    }

    console.log(arr.join(' '));

}

solve(['1','2','3','4'],1);
solve(['1','2','3','4'],2);
solve(['1','2','3','4'],3);
solve(['1','2','3','4'],4);
function foo(arr) {

    const juices = {};
    const bottles = {};

    //dobavqme buitilki
    const addBottles = (n, q) => {

        const btlToAdd = (q - (q % 1000)) / 1000;

        if (btlToAdd > 0) {
            bottles[n] = (bottles[n] || 0) + btlToAdd;
            return q % 1000;
        } 

        return q;

    }

    //array work
    arr.forEach (x => {
        const [name, quantity] = x.split(' => ');
        juices[name] = juices[name] || 0;

        juices[name] = addBottles(name, juices[name] + Number(quantity));
    });

    //return -> object : string
    return Object.entries(bottles).
        map(([name, quantity]) => `${name} => ${quantity}`).join('\n');

}

console.log(foo(['Kiwi => 234',

    'Pear => 2345',
    
    'Watermelon => 3456',
    
    'Kiwi => 4567',
    
    'Pear => 5678',
    
    'Watermelon => 6789']));
let a = 'orange';
let b = 2500;
let c = 1.80;

function fruit(a, b, c) {

    let fruit = a;

    let weight = Number(b) / 1000;

    let price = Number(c);

    let money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit(a, b, c);

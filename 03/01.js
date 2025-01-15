function calorie(input) {

    let obj = {};

    for(let i = 0; i < input.length; i += 2) {

        let food = input[i];

        let calories = input[i + 1];

        calories = Number(calories);

        obj[food] = calories;

    }

    return obj;

}

console.log(calorie(['Potato', '93', 'Skyr', '63',

    'Cucumber', '18', 'Milk', '42']));
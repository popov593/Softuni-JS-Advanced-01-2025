function heroicInventory(arr) {

    let heroes = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].trim() === '') {
            continue;
        }

        let [name, level, items] = arr[i].split (' / ');

        level = Number(level);

        items = items ? items.split(', ') : [];

        heroes.push({
            name,
            level,
            items
        });

    }

    return JSON.stringify(heroes);

}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara']));
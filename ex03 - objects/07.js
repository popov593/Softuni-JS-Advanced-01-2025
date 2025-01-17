function towns(input) {

    let townsArr = [];

    for (let town of input.slice(1)) {

        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);

        lat = Number(lat).toFixed(2);
        lng = Number(lng).toFixed(2);

        let townObj = {
            Town: townName,
            Latitude: Number(lat),
            Longitude: Number(lng),
        }

        townsArr.push(townObj);

    }

    console.log(JSON.stringify(townsArr));

}

towns([
    '| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',
    
    '| Beijing | 39.913818 | 116.363625 |'
]);


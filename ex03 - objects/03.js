function factory(car) {

/*     if (car.power <= 90) {

        car.engine = { power: 90, volume: 1800};

    } else if (car.power <= 120 ) {

        car.engine = { power: 120, volume: 2400};

    } else {

        car.engine = { power: 200, volume: 3500};
        
    } */

    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    car.engine = engines.find(

        engine => engine.power >= car.power

    );

    delete car.power;

/*     if (car.carriage === 'hatchback') {

        car.carriage = {
            type: 'hatchback', color: car.color
        };

    } else if (car.carriage === 'coupe') {
        car.carriage  = {
            type: 'coupe', color: car.color
        };
    } */

    function setCarriage(car, type, color) {
        car.carriage = { type, color };
    }

    if (car.carriage === 'hatchback' || car.carriage === 'coupe') {
        setCarriage(car, car.carriage, car.color);
    }

    delete car.color;

    let size = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

    car.wheels = [size, size, size, size];

    delete car.wheelsize;

    console.log(car);

    return car;

}

factory({ model: 'Opel Vectra',

    power: 110,
    
    color: 'grey',
    
    carriage: 'coupe',
    
    wheelsize: 17 });
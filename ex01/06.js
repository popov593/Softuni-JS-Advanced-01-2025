function radar(kmph, area) {

    if (area == 'city') {

        let limit = 50;

        if (kmph <= limit) {
            //ok `Driving {speed} km/h in a {speed limit} zone
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);

        } else {

            let difference = kmph - limit;

            let status = '';

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

        }

    }

    if (area == 'motorway') {

        let limit = 130;

        if (kmph <= limit) {
            //ok `Driving {speed} km/h in a {speed limit} zone
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);

        } else {

            let difference = kmph - limit;

            let status = '';

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

        }

    }

    if (area == 'interstate') {

        let limit = 90;

        if (kmph <= limit) {
            //ok `Driving {speed} km/h in a {speed limit} zone
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);

        } else {

            let difference = kmph - limit;

            let status = '';

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

        }

    }

    if (area == 'residential') {

        let limit = 20;

        if (kmph <= limit) {
            //ok `Driving {speed} km/h in a {speed limit} zone
            console.log(`Driving ${kmph} km/h in a ${limit} zone`);

        } else {

            let difference = kmph - limit;

            let status = '';

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            //`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);

        }

    }

}

radar(70, 'city');
radar(200, 'motorway');
radar(120, 'interstate');
radar(21, 'residential');
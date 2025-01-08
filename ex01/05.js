function walking(arg1, arg2, arg3) {

    let stepsNumber = Number(arg1);
    let strideMeters = Number(arg2);
    let studentSpeed = Number(arg3);

    let distanceMeters = stepsNumber * strideMeters; //distance to walk

    let speedMeterSec = studentSpeed / 3.6;

    let time = distanceMeters / speedMeterSec;

    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time % 60);
    let timeHr = Math.floor(time / 3600);

    let totalMinutes = timeMin + rest;

    if (totalMinutes >= 60) {
        timeHr += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;
    }

    console.log (

        (timeHr < 10 ? "0" : "") + timeHr + ":" + (totalMinutes < 10 ? "0" : "") + totalMinutes + ":" + (timeSec < 10 ? "0" : "") + timeSec

    );

}

let steps = 4000;
let stride = 0.60;
let kmh = 5;

walking(steps, stride, kmh);
walking(2564, 0.70, 5.5);

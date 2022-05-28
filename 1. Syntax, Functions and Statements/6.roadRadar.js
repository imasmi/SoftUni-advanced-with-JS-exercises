function roadRadar(speed, place) {
    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    }

    if (limits[place] >= speed) {
        console.log(`Driving ${speed} km/h in a ${limits[place]} zone`);
    } else {
        let difference = speed - limits[place];
        let status = "";
        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${difference } km/h faster than the allowed speed of ${limits[place]} - ${status}`);
    }
}

roadRadar(200, 'motorway');
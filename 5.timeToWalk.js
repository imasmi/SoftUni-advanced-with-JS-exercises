function timeToWalk(steps, length, speed) {
    function addZero(input){
        return input.toString().padStart(2, '0');
    }
    let distance = steps * length;
    let breaks = Math.floor(distance / 500) * 60;
    let time = Math.round((distance / (speed * 1000)) * 60 * 60);
    let totalSeconds = time + breaks;
    let minutes = totalSeconds / 60;
    let second = Math.round(60 * (minutes % 1));
    let minute = Math.floor(minutes) % 60;
    let hour = Math.floor(minutes / 60);
    
    console.log(`${addZero(hour)}:${addZero(minute)}:${addZero(second)}`);
}

timeToWalk(4000, 0.60, 5);
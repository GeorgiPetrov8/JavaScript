function solve(kmH, zone) {
    let speedLimit;
    switch (zone) {
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
    }

    if (kmH > speedLimit) {
        let difference = kmH - speedLimit;
        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    } else {
        console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`)
    }
}
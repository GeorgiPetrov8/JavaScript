function solve(steps, metersPerStep, kmH) {
    let totalMeters = steps * metersPerStep;
    let rest = Math.floor(totalMeters / 500) * 60;
    let speed = kmH / 3.6;
    let time = totalMeters / speed + rest;

    let hourse = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));

    console.log(
        (hourse < 10 ? '0' : '') + hourse + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );
}
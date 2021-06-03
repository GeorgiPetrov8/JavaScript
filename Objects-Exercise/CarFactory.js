function solve(obj) {
    let car = { model: obj.model };

    let engine = {};
    let first = Math.abs(obj.power - 90);
    let second = Math.abs(obj.power - 120);
    let third = Math.abs(obj.power - 200);

    let power = 90;
    let volume = 1800;
    if (second < first && second < third) {
        power = 120;
        volume = 2400;
    } else if (third < first && third < second) {
        power = 200;
        volume = 3500;
    }
    engine.power = power;
    engine.volume = volume;
    car.engine = engine;

    car.carriage = {
        type: obj.carriage,
        color: obj.color
    };

    let wheel = 0;
    if (obj.wheelsize % 2 == 0) {
        wheel = obj.wheelsize - 1;
    } else {
        wheel = obj.wheelsize;
    }

    car.wheels = [wheel, wheel, wheel, wheel];

    return car;
}
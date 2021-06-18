function solve(area, vol, input) {
    let objects = JSON.parse(input);

    function calc(obj) {
        let areaObject = area.call(obj);
        let volumeObjcet = vol.call(obj);
        return { area: areaObject, volume: volumeObjcet };
    }
    return objects.map(calc);
}

function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

solve(area, vol,
    '[{ "x": "1", "y": "2", "z": "10" },{ "x": "7", "y": "7", "z": "10" },{ "x": "5", "y": "2", "z": "10" }]');
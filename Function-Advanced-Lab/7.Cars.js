function solve(commandsArr) {
    let cars = {};

    for (const command of commandsArr) {
        if (command.includes('inherit')) {
            let [, name, , inheritName] = command.split(' ');
            let newCar = {inherit: cars[inheritName]}
            cars[name] = newCar;
        } else if (command.includes('create')) {
            cars[command.split(' ')[1]] = {};
        } else if (command.includes('set')) {
            let [, carName, property, value] = command.split(' ');
            cars[carName][property] = value;
        } else {
            let carName = command.split(' ')[1];
            let obj = cars[carName];

            if (obj.inherit !== undefined) {
               obj = Object.assign(obj.inherit, obj)
               delete obj.inherit;
            }    
            let result = [];
            for (const key in obj) {
                result.push(`${key}:${obj[key]}`);
            }

            console.log(result.reverse().join(', '));
        }
    }

}

solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c1 power 100', 'set c2 model new', 'set c2 power 200', 'print c1', 'print c2']);
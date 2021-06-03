function solve(arr) {
    const towns = {};

    for (const townAsString of arr) {
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
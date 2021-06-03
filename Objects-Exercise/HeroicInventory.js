function solve(arr) {
    let heroes = [];

    for (const element of arr) {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({name, level, items});
    }

    console.log(JSON.stringify(heroes));
}
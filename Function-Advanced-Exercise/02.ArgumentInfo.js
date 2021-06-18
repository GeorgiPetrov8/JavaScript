function solve(...arr) {
    let countObj = {};

    for (const element of arr) {
        let type = typeof element;
        console.log(`${type}: ${type === 'object' ? '' : element}`);

        if (countObj[type] == undefined) {
            countObj[type] = 1;
        } else {
            countObj[type] += 1;
        }
    }

    Object.keys(countObj).reverse().sort((a, b) => {
        if (countObj[a] >= countObj[b]) {
            return -1
        }
        return 1;
    }).forEach(key => console.log(`${key} = ${countObj[key]}`));
}
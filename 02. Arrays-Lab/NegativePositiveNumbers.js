function solve(array) {
    let result = [];
    for (const element of array) {
        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    }

    result.forEach(x => console.log(x));
}
function solve(x1, y1, x2, y2) {
    let firstResult = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let secondResult = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let thirdResult = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

    console.log(`{${x1}, ${y1}} to {0, 0} is ` + (Number.isInteger(firstResult) ? 'valid' : 'invalid'));
    console.log(`{${x2}, ${y2}} to {0, 0} is ` + (Number.isInteger(secondResult) ? 'valid' : 'invalid'));
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ` + (Number.isInteger(thirdResult) ? 'valid' : 'invalid'));
}
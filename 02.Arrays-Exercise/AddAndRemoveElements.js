function solve(arr) {
    let result = [];
    let counter = 0;
    for (const command of arr) {
        counter++;
        let a = 'add';
        if (command == a) {
            result.push(counter);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        result.forEach(x => console.log(x));
    }
}
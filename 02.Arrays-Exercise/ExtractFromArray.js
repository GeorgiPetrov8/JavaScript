function solve(arr) {
    let result = arr.reduce((acc, curr) => {
        if (curr > acc) {
            acc = curr;
            return acc;
        } else {

        }
    })

    return result;
}

//TODO

console.log(solve(
    [
        1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24
    ]
));
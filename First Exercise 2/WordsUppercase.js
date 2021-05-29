function solve(input) {
    arr = input.split(/\W+/g);

    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            output += arr[i].toUpperCase() + ', ';
        }
    }
    output = output.substring(0, output.length - 2);
    console.log(output);
}
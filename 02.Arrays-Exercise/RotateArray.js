function solve(arr, n) {
    let rotations = n % arr.length;
    while (rotations > 0) {
        rotations--;
        let lastElem = arr.pop();
        arr.unshift(lastElem);
    }

    console.log(arr.join(' '));
}
function solve(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let startIndex = 0;
        if (k <= i) {
            startIndex = i - k;

        }

        let sum = 0;
        for (let j = startIndex; j < i; j++) {
            sum += array[j];
        }
        array.push(sum);
    }

    return array
}
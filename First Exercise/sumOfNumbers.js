function solve (input1, input2) {
    n = Number(input1);
    m = Number(input2);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;    
    }

    console.log(sum);
}
function solve(number) {
    let type = typeof (number);
    if (type === 'number') {
        for (let i = 0; i < number; i++) {
            let line = '';
            for (let i = 0; i < number; i++) {
                line += '*' + ' ';
            }
            console.log(line);
        }
    } else{
        console.log
            (
                '* * * * *\n' +
                '* * * * *\n' +
                '* * * * *\n' +
                '* * * * *\n' +
                '* * * * *\n'
            )
    }
}
function solve(input) {
    let arr = [];
    let processor = {
        add: (el) => arr.push(el),
        remove: (el) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === el) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        },
        print: () => console.log(arr.join(',')),
    }

    input.forEach(el => {
        if (el !== 'print') {
            let [command, value] = el.split(' ');
            processor[command](value);
        } else {
            processor.print();
        }
    })
}
function solve(...arr) {
    let number = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let currOperation = arr[i];
        switch (currOperation) {
            case 'chop': 
            number /= 2; 
            console.log(number);
            break;
            case 'dice': 
            number = Math.sqrt(number);
            console.log(number);
            break;
            case 'spice': 
            number += 1; 
            console.log(number);
            break;
            case 'bake': 
            number *= 3; 
            console.log(number);
            break;
            case 'fillet': 
            number -= number * 0.2;
            console.log(number); 
            break;
        }
    }
}
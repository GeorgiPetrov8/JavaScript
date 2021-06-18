//global
function getFibonator() {
    //closure context
    let currNumber = 0;
    let lastNumber = 1;
    return function fibonaor() {
        // func context
        result = currNumber + lastNumber;
        lastNumber = currNumber;
        currNumber = result;
        return result;
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
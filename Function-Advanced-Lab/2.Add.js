function solve(number) {
    return function (innerNumber){
        return number + innerNumber;
    }
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

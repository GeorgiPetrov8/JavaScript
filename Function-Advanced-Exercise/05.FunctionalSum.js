let f = (function () {
    // shte se izpulni vednaga
    let total = 0;
    return function sum(a) {
        total += a;
        sum.toString = () => total;
        return sum;
    }
})();
console.log(f(1)(2).toString());
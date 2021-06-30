function createCalculator() {
    let value = 0;
    return {
        add: (n) => {value += Number(n)},
        subtract: (n) => {value -= Number(n)},
        get: () => {return value},
    }
}

module.exports = createCalculator;
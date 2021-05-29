function solve(fruit, weight, price) {
    let kilograms = weight / 1000;
    let finalPrice = kilograms * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}
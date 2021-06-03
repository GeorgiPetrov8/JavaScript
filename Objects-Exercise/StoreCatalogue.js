function solve(arr) {
    let products = [];

    for (const string of arr) {
        let[name, price] = string.split(' : ');
        price = Number(price);
        products.push({name, price});
    }

    products.sort((a,b) => a.name.localeCompare(b.name));

    let initial = '';
    while(products.length > 0) {
        let currProduct = products.shift();
        firstWord = currProduct.name.charAt(0);
        if (initial !== firstWord) {
            console.log(firstWord);
            initial = firstWord;
        }
        console.log(`  ${currProduct.name}: ${currProduct.price}`);
    }
    
}
function solve(arr) {
    let object = {};

    for (const string of arr) {
        let [productTown, productName, productPrice] = string.split(' | ');
        let townExists = false;
        if (object[productName] == undefined) {
            object[productName] = [];
        } else {
            for (let product of object[productName]) {
                if (product.productTown == productTown) {
                    product.productTown = productTown;
                    product.productPrice = productPrice;
                    townExists = true;
                    break;
                }
            }
        }

        if (!townExists) {
            object[productName].push({ productTown, productPrice });
        }
    }

    let result = [];
    for (const key in object) {
        object[key].sort((a, b) => a.productPrice - b.productPrice);
        result.push(`${key} -> ${object[key][0].productPrice} (${object[key][0].productTown})`)
    }

    console.log(result.join('\n'));
}

// 75/100
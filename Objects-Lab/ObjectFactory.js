function solve(library, orders) {
    let newArr = [];

    for (const order of orders) {
        let product = {
            name: order.template.name
        };

        for (const part of order.parts) {
            product[part] = library[part];
        }

        newArr.push(product);
    }

    return newArr;
}
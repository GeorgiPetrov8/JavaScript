function solution() {
    let microElements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0, };

    let coocker = {
        apple: (quantity) => {
            return cook(0, 1, 0, 2, quantity);
        },
        lemonade: (quantity) => {
            return cook(0, 10, 0, 20, quantity);
        },
        burger: (quantity) => {
            return cook(0, 5, 7, 3, quantity);
        },
        eggs: (quantity) => {
            return cook(5, 0, 1, 1, quantity)
        },
        turkey: (quantity) => {
            return cook(10, 10, 10, 10, quantity);
        },
    };

    function cook(prot, carb, fa, flav, quantity) {
        let proteinQ = prot * quantity;
        let carbohydrateQ = carb * quantity;
        let fatQ = fa * quantity;
        let flavourQ = flav * quantity;

        if (microElements.protein >= proteinQ &&
            microElements.carbohydrate >= carbohydrateQ &&
            microElements.fat >= fatQ &&
            microElements.flavour >= flavourQ) {

            microElements.protein -= proteinQ;
            microElements.carbohydrate -= carbohydrateQ;
            microElements.fat -= fatQ;
            microElements.flavour -= flavourQ;
            return 'Success';
        }

        if (proteinQ > microElements.protein) {
            return 'Error: not enough protein in stock';
        } else if (carbohydrateQ > microElements.carbohydrate) {
            return 'Error: not enough carbohydrate in stock';
        } else if (fatQ > microElements.fat) {
            return 'Error: not enough fat in stock';
        } else {
            return 'Error: not enough flavour in stock';
        }

    }


    return function manager(input) {
        if (input !== 'report') {
            let [command, element, quantity] = input.split(' ');

            if (command == 'restock') {
                microElements[element] += Number(quantity);
                return 'Success';
            } else if (command == 'prepare') {
                return coocker[element](quantity);
            }

        }
        return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
    }
}

let manager = solution();
console.log(manager('restock protein 50'));
console.log(manager('restock carbohydrate 50'));
console.log(manager('restock fat 50'));
console.log(manager('restock flavour 50'));
console.log(manager('prepare turkey 6'));
console.log(manager('report'));

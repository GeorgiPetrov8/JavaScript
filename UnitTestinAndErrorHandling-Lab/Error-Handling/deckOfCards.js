function printDeckOfCards(cards) {
    let result = [];
    String.substring

    for (let card of cards) {
        try {
            let face = card.substring(0, card.length - 1);
            let suit = card.substring(card.length - 1);
            result.push(crateCard(face, suit));
        } catch (err) {
            result.push('Invalid card: ' + card);
        }
    }

    function crateCard(face, suit) {
        if ((face >= 2 && face <= 10 || 'JQKA'.includes(face)) && 'SHDC'.includes(suit)) {
            let suitSymbol = '';
            switch (suit) {
                case 'S': suitSymbol = '\u2660';
                    break;
                case 'H': suitSymbol = '\u2665';
                    break;
                case 'D': suitSymbol = '\u2666';
                    break;
                case 'C': suitSymbol = '\u2663';
                    break;
            }
            return face + suitSymbol;
        }

        throw new Error;
    }

    console.log(result.join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);
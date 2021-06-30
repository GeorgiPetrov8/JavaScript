function solve (face, suit) {
    if ('2 3 4 5 6 7 8 9 10 J Q K A'.includes(face) && 'S H D C'.includes(suit)) {
        let suitSymbol = '';
        switch(suit) {
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
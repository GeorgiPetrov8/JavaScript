function calculator() {
    return calculate = {
        selector1: undefined,
        selector2: undefined,
        resultSelector: undefined,
        init(s1, s2, rs) {
            selector1 = document.querySelector(s1);
            selector2 = document.querySelector(s2);
            resultSelector = document.querySelector(rs);
        },
        add() {
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract() {
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        },
    }
}





function solve(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let reversed = arr.slice(0).reverse();
    let equal = (JSON.stringify(reversed) == JSON.stringify(arr));
    return equal;
}

module.exports = solve;
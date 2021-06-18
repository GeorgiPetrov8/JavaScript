function solve(nums, sortType) {
    if (sortType === 'asc') {
        return asc.call(nums);
    } else {
        return desc.call(nums);
    }
}
function asc() {
    return this.sort((a, b) => a - b);
}

function desc() {
    return this.sort((a, b) => b - a);
}
solve([14, 7, 17, 6, 8], 'desc');
function solve(arr) {
    arr.sort((a,b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    })

    arr.forEach(x => console.log(x));
}
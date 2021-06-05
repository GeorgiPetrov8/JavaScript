function extract(content) {
    let text = document.getElementById(content).textContent;
    let matcher = /\([\w\s]*\)/g;
    let arr = text.match(matcher);


    let result = [];
    for (let string of arr) {
        result.push(string.slice(1, string.length - 1));
    }

    return result.join(', ');
}
function sumTable() {
    let values = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    let sum = values.pop();
    let result = 0;
    for (const value of values) {
        result += Number(value.textContent);
    }
    document.getElementById('sum').textContent = result;
}
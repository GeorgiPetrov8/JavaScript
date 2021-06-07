function subtract() {
    let firstValue = document.getElementById('firstNumber').value;
    let secondValue = document.getElementById('secondNumber').value;
    let result = Number(firstValue) - Number(secondValue);

    document.getElementById('result').textContent = result;
}
function deleteByEmail() {
    let emailMacher = document.querySelector('label>input').value;
    let tableEmails = document.querySelectorAll('tbody tr td:nth-child(2)');

    let result = 'Not found.';
    for (let email of tableEmails) {
        if (email.textContent === emailMacher) {
            email.parentElement.remove();
            result = 'Deleted.';
        }
    }

    document.getElementById('result').textContent = result;
}
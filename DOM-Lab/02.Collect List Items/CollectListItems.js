function extractText() {
    let list = document.getElementsByTagName('li');
    let output = '';

    for (const item of list) {
        output += item.textContent.trim() + '\n';
    }

    let result = document.getElementById('result');
    result.textContent = output.trim();
}
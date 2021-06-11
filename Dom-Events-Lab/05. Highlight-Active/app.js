function focused() {
    let inputElements = document.getElementsByTagName('input');
    for (let input of inputElements) {
        input.addEventListener('focus', focused);
        input.addEventListener('blur', blurred);
    }

    function focused(event) {
        event.target.parentElement.className = 'focused';
    }

    function blurred(event) {
        event.target.parentElement.className = '';
    }
}
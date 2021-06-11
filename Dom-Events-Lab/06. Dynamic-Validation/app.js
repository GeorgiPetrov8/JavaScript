function validate() {
    let element = document.getElementById('email');
    element.addEventListener('change', validate);

    function validate(event) {
        let value = event.target.value;
        let matcher = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}/;

        if (!value.match(matcher)) {
            event.target.className = 'error';
        } else {
            event.target.classList.remove('error');
        }
    }
}
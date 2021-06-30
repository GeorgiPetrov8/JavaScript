function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (event) => {
        let email = event.target.value;
        let regex = /^[a-z]+@[a-z]{3,}\.[a-z]{2,}$/;

        let validateEmail = email.match(regex);

        if (validateEmail === null) {
            event.target.className += 'error';
        } else {
            event.target.className = ''; 
        }
    });
}
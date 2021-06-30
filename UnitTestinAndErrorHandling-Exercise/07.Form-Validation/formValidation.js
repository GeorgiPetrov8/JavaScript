function validate() {
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPassElement = document.getElementById('confirm-password');
    let companyCheckBox = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let validDiv = document.getElementById('valid');

    companyCheckBox.addEventListener('change', (event) => {
        if (event.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }

    });

    let button = document.getElementById('submit');
    button.addEventListener('click', (event) => {
        event.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwodRegex = /^[\w]{5,15}$/;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

        let correct = true
        if (usernameElement.value.match(usernameRegex) == null) {
            usernameElement.style.borderColor = 'red';
            correct = false;
        } else {
            usernameElement.style.borderColor = '';
        }

        if (passwordElement.value === confirmPassElement.value && 
            passwordElement.value.match(passwodRegex) != null &&
            confirmPassElement.value.match(passwodRegex) != null) {

            passwordElement.style.borderColor = '';
            confirmPassElement.style.borderColor = '';
        } else {
            passwordElement.style.borderColor = 'red';
            confirmPassElement.style.borderColor = 'red';
            correct = false;
        }
        
        if (emailElement.value.match(emailRegex) == null) {
            emailElement.style.borderColor = 'red';
            correct = false;
        } else {
            emailElement.style.borderColor = '';
        }

        if (companyCheckBox.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                correct = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }

        if (correct) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    })
};
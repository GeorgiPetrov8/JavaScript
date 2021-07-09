function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let main = document.getElementById('main');
    main.innerHTML = '';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            let count = 1;
            for (let key in data) {
                let username = data[key].username;
                let age = data[key].age;
                let email = data[key].email;

                createElements(username, age, email);
            }

            function createElements(username, age, email) {
                let profileDiv = document.createElement('div');
                profileDiv.classList += 'profile';

                let image = document.createElement('img');
                image.classList += 'userIcon';
                image.src = './StoqnKolev.jpg';

                let lockLabel = document.createElement('label');
                lockLabel.textContent = 'Lock ';

                let lockCheckBox = document.createElement('input');
                lockCheckBox.type = 'radio';
                lockCheckBox.name = 'user' + count + 'Locked';
                lockCheckBox.value = 'lock';

                let unlockLabel = document.createElement('label');
                unlockLabel.textContent = ' Unlock ';

                let unlockCheckBox = document.createElement('input');
                unlockCheckBox.type = 'radio';
                unlockCheckBox.name = 'user' + count + 'Locked';
                unlockCheckBox.value = 'unlock';
                unlockCheckBox.checked = true;

                let br = document.createElement('br');

                let hr1 = document.createElement('hr');

                let usernameLabel = document.createElement('label');
                usernameLabel.textContent = 'Username';

                let usernameInput = document.createElement('input');
                usernameInput.type = 'text';
                usernameInput.name = 'user' + count + 'Username';
                usernameInput.value = username;
                usernameInput.disabled = true;
                usernameInput.readOnly = true;

                let hiddenDiv = document.createElement('div');
                hiddenDiv.id = 'user' + count + 'HiddenFields';

                let hr2 = document.createElement('hr');

                let emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email:';

                let emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.name = 'user' + count + 'Email';
                emailInput.value = email;
                emailInput.disabled = true;
                emailInput.readOnly = true;

                let ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age:';

                let ageInput = document.createElement('input');
                ageInput.type = 'email';
                ageInput.name = 'user' + count + 'Age';
                ageInput.value = age;
                ageInput.disabled = true;
                ageInput.readOnly = true;

                let showAndHideButton = document.createElement('button');
                showAndHideButton.textContent = 'Show more';

                showAndHideButton.addEventListener('click', (event) => {
                    let button = event.currentTarget;
                    if (button.textContent == 'Show more') {
                        button.textContent = 'Hide it';
                        hiddenDiv.style.display = 'block';
                    } else {
                        button.textContent = 'Show more';
                        hiddenDiv.style.display = 'none';
                    }
                })

                lockCheckBox.addEventListener('click', () => {
                    showAndHideButton.disabled = true;
                })

                unlockCheckBox.addEventListener('click', () => {
                    showAndHideButton.disabled = false;
                })

                profileDiv.appendChild(image);
                profileDiv.appendChild(lockLabel);
                profileDiv.appendChild(lockCheckBox);
                profileDiv.appendChild(unlockLabel);
                profileDiv.appendChild(unlockCheckBox);
                profileDiv.appendChild(br);
                profileDiv.appendChild(hr1);
                profileDiv.appendChild(usernameLabel);
                profileDiv.appendChild(usernameInput);

                hiddenDiv.appendChild(hr2);
                hiddenDiv.appendChild(emailLabel);
                hiddenDiv.appendChild(emailInput);
                hiddenDiv.appendChild(ageLabel);
                hiddenDiv.appendChild(ageInput);

                profileDiv.appendChild(hiddenDiv);
                profileDiv.appendChild(showAndHideButton);

                main.appendChild(profileDiv);

                count++;
            }


        }).catch((err) => {
            main.textContent = err;
        });
}


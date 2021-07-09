function solution() {
    let mainSection = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then((respones) => respones.json())
        .then((data) => {
            data.forEach(object => {

                let id = object['_id'];
                fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id)
                    .then((response) => response.json())
                    .then((article) => {
                        let divAccordion = document.createElement('div');
                        divAccordion.classList += 'accordion';

                        let divHead = document.createElement('div');
                        divHead.classList += 'head';

                        let span = document.createElement('span');
                        span.textContent = article.title;

                        let button = document.createElement('button');
                        button.classList += 'button';
                        button.id = article['_id'];

                        button.addEventListener('click', (event) => {
                            let clickedButt = event.currentTarget;
                            if (clickedButt.textContent == 'More') {
                                clickedButt.textContent = 'Less';
                                divExtra.style.display = 'block';
                            } else {
                                clickedButt.textContent = 'More';
                                divExtra.style.display = 'none';
                            }
                        })

                        button.textContent = 'More';

                        let divExtra = document.createElement('div');
                        divExtra.classList += 'extra';

                        let paragraph = document.createElement('p');
                        paragraph.textContent = article.content;

                        divAccordion.appendChild(divHead);
                        divHead.appendChild(span);
                        divHead.appendChild(button);
                        divAccordion.appendChild(divExtra);
                        divExtra.appendChild(paragraph);

                        mainSection.appendChild(divAccordion);
                    })
                    .catch((err) => mainSection.textContent = err);
            })

        }).catch((err) => mainSection.textContent = err)
}

solution();
import { render } from '../node_modules/lit-html/lit-html.js';
import { townTamplete } from './menuTemplate.js';

let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
let dropdownSection = document.getElementById('menu');

function loadTowns() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let allTemplates = [];
            let keys = Object.keys(data);
            keys.forEach(key => {
                allTemplates.push(townTamplete(key, data[key].text));
            });

            render(allTemplates, dropdownSection);
        })
        .catch(err => console.log(err));
}

function postTown(text) {
    fetch(url, {
        method: 'Post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ text })
    }).catch(err => console.log(err));
}

function addItem() {
    let form = document.querySelector('body > article > form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let text = formData.get('townName');
        e.currentTarget.reset();

        if (text === '') {
            return;
        }

        postTown(text);
        loadTowns();
    })

}

loadTowns();
addItem();
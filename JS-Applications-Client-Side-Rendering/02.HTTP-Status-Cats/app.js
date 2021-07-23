import { cats } from "./catSeeder.js"
import { render } from '../node_modules/lit-html/lit-html.js';
import { allCatsTemplate } from "./catsTemplate.js";


function statusCodeHandler(e) {
    let button = e.target;
    button.textContent = button.textContent === 'Show status code'
        ? 'Hide status code'
        : 'Show status code';
    let infoDiv = button.closest('.info');
    let statusDiv = infoDiv.querySelector('.status');

    button.textContent === 'Hide status code'
        ? statusDiv.style.display = 'block'
        : statusDiv.style.display = 'none';
}

function loadCats() {
    let allCatsSection = document.getElementById('allCats');
    render(allCatsTemplate(cats, statusCodeHandler), allCatsSection);
}

loadCats();
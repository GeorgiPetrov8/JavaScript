import { render } from '../node_modules/lit-html/lit-html.js';
import allTownsTemplate from './townsTemplate.js';
function renderTowns() {
    let rootDiv = document.getElementById('root');
    let formTowns = document.querySelector('.content');
    formTowns.addEventListener('submit', (e) => {
        e.preventDefault();

        let data = new FormData(e.currentTarget);
        let towns = data.get('towns').split(', ');
        render(allTownsTemplate(towns), rootDiv);

        e.currentTarget.reset();
    });   
}

renderTowns();
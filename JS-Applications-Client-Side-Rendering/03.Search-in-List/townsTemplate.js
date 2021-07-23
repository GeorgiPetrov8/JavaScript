import { html } from '../node_modules/lit-html/lit-html.js';

function townTemplate(town) {
    return html`<li>${town}</li>`;
}

export function allTownsTemplate(towns) {
    return html`<ul>
    ${towns.map(t => townTemplate(t))}
</ul>`
}
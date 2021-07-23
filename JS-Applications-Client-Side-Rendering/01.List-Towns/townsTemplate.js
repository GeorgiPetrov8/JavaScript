import { html } from '../node_modules/lit-html/lit-html.js';

let townTemplate = (town) => html`<li>${town}</li>`;

let allTownsTemplate = (towns) => {
    return html`<ul>${towns.map(t => townTemplate(t))}</ul>`;
}

export default allTownsTemplate;
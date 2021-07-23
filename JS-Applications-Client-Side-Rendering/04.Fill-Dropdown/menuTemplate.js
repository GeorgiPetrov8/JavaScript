import { html } from '../node_modules/lit-html/lit-html.js';

export function townTamplete(id, name) {
    return html`<option value=${id}>${name}</option>`
}
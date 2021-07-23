import { html } from '../node_modules/lit-html/lit-html.js';

export function studentRowTamplate(name, email, course) {
    return html`<tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${course}</td>
</tr>`
}
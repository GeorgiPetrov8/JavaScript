import { html } from '../node_modules/lit-html/lit-html.js';

export let catTemplate = (cat, statusCodeHandler) => {
    return html`<li>
    <img src=${`images/${cat.imageLocation}.jpg`} width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${statusCodeHandler} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`
};

export let allCatsTemplate = (cats, statusCodeHandler) => {
    return html`<ul>${cats.map(c => catTemplate(c, statusCodeHandler))}</ul>`
}

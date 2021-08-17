import { jsonRequest } from "../helpers/jsonRequest.js";


let baseUrl = 'http://localhost:3030/data/catalog';

async function getAll() {
    let response = jsonRequest(baseUrl);
    return response
}

async function get(id) {
    let response = jsonRequest(`${baseUrl}/${id}`);
    return response
}

async function create(item) {
    let response = jsonRequest(baseUrl, 'Post', item, true);
    return response
}

async function update(item, id) {
    let response = jsonRequest(`${baseUrl}/${id}`, 'Put', item, true);
    return response
}
async function deleteItem(id) {
    let response = jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return response
}

async function getMyFurniture(userId) {
    let response = jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return response
}

export default {
    getAll,
    get,
    create,
    update,
    deleteItem,
    getMyFurniture
}
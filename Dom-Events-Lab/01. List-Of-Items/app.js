function addItem() {
    let item = document.createElement('li');
    item.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(item);
}
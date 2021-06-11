function addItem() {
    let listItem = document.createElement('li');
    listItem.textContent = document.getElementById('newItemText').value;
    
    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    listItem.appendChild(remove);
    document.getElementById('items').appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }
}
function editElement(element, match, replacer) {
    let content = element.textContent;
    let matcher = new RegExp(match, 'g'); // Match all 
    edited = content.replace(matcher,replacer);
    element.textContent = edited;
}
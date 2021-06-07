function toggle() {
    let button = document.querySelector('.head .button').textContent;

    if (button == 'More') {
        document.querySelector('.head .button').textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        document.querySelector('.head .button').textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}
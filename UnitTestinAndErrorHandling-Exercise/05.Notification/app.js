function notify(message) {
  let p = document.createElement('p');
  p.textContent = message;

  let div = document.getElementById('notification');
  div.style.display = 'block';
  div.appendChild(p);

  div.addEventListener('click', (event) => {
    event.target.style.display = 'none';
  });
}
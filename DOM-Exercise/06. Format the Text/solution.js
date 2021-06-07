function solve() {
  let text = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = text.split('.').filter(s => s.length > 0);

  for (let i = 0; i < input.length; i += 3) {
    let arr = [];
    for (let k = 0; k < 3; k++) {
      if (input[i + k]) {
        arr.push(input[i + k]);
      }
    }

    let paragraph = arr.join('.').trim() + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}
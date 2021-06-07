function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result = '';
  switch (namingConvention) {
    case "Camel Case": {
      let words = text.split(' ');
      result = concatArray(words);
      result = result.charAt(0).toLowerCase() + result.slice(1);
      break;
    }
    case "Pascal Case":
      let words = text.split(' ');
      result = concatArray(words);
      break;
    default:
      result = 'Error!';
      break;
  }

  document.getElementById('result').textContent = result;
}

function concatArray(words) {
  let result = '';
  for (let word of words) {
    word = word.toLowerCase();
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return result;
}

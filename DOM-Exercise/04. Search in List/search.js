function search() {
   let value = document.getElementById('searchText').value;
   let towns = document.getElementById('towns').getElementsByTagName('li');
   
   let matches = 0;
   for (const town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
      if (town.textContent.includes(value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = matches + ' matches found';  
}

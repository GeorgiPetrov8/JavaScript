function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let macher = document.getElementById('searchField').value;
      let tableBody = document.getElementsByTagName('tbody');
      let tableRows = tableBody[0].getElementsByTagName('tr');

      for (const row of tableRows) {
         row.className = '';
         if (macher != '') {
            let tableCells = row.getElementsByTagName('td');
            for (const cell of tableCells) {
               if (cell.textContent == macher || cell.textContent.includes(macher)) {
                  row.className = 'select';
                  break;
               }
            }
         }
      }

      document.getElementById('searchField').value = '';
   }
}
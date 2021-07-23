import { render } from '../node_modules/lit-html/lit-html.js';
import { studentRowTamplate } from './StudentTemplate.js';

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allStudentRows = document.querySelectorAll('body > table > tbody > tr')
      allStudentRows.forEach(node => node.classList.remove('select'));

      let input = document.getElementById('searchField');
      if (input.value === '') {
         return;
      }

      allStudentRows.forEach(node => {
         let tdNodes = node.querySelectorAll('td');
         let rowText = Array.from(tdNodes).reduce((acc, curr) => {    
            return acc += curr.textContent;
         }, '');
         
         if (rowText.toLowerCase().includes(input.value.toLowerCase())) { 
            node.classList.add('select');
         }
      });

      input.value = '';
   }
}

function loadStudents() {
   let tbody = document.querySelector('body > table > tbody');
   let url = 'http://localhost:3030/jsonstore/advanced/table';

   fetch(url)
      .then(response => response.json())
      .then(data => {
         let allStudentRows = [];

         let keys = Object.keys(data);
         keys.forEach(key => {
            allStudentRows.push(studentRowTamplate(
               data[key].firstName + ' ' + data[key].lastName,
               data[key].email,
               data[key].course));
         });

         render(allStudentRows, tbody);
      })
      .catch(err => console.log(err));

}
loadStudents();
solve();
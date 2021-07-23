import { towns } from "./towns.js";
import { allTownsTemplate } from "./townsTemplate.js";
import { render } from '../node_modules/lit-html/lit-html.js';

function search() {
   let townsDiv = document.getElementById('towns');
   let resultDiv = document.getElementById('result');
   render(allTownsTemplate(towns), townsDiv);

   let searchButton = document.querySelector('body > article > button');
   searchButton.addEventListener('click', (e) => {
      e.preventDefault();

      resultDiv.childNodes.forEach(node => node.remove());

      let input = document.getElementById('searchText');
      if (input.value === '') {
         return;
      }

      let matchesCount = 0;

      let townsNodes = document.querySelectorAll('body > article > div > ul > li');
      townsNodes.forEach(x => {
         if (x.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            x.style = 'text-decoration: underline'
            matchesCount++;
         } else {
            x.style = 'none';
         } 
      });

      let paragraph = document.createElement('p');
      paragraph.textContent = `${matchesCount} matches found`;
      resultDiv.appendChild(paragraph);
   });
}

search();

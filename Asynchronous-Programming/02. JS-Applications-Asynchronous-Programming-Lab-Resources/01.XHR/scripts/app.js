function loadRepos() {
   //Old way
   let httpRequest = new XMLHttpRequest();
   let url = 'https://api.github.com/users/testnakov/repos';

   httpRequest.addEventListener('readystatechange', (e) => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         document.getElementById('res').textContent = httpRequest.responseText;
      }
   });

   httpRequest.open('Get', url);
   httpRequest.send();
}
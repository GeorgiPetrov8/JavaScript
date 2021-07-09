function loadRepos() {
	//new way
	let baseUrl = 'https://api.github.com/users/';
	let username = document.getElementById('username').value;
	let repos = document.getElementById('repos');
	repos.innerHTML = '';

	let httpStatus = '';
	fetch(baseUrl + username + '/repos')
		.then((response) => {
			httpStatus = response.status + ' ' + response.statusText;
			return response.json()
		})
		.then((data) => {
			data.forEach(x => {
				let listItem = document.createElement('li');
				let link = document.createElement('a');
				link.textContent = x['full_name'];
				link.href = x['html_url'];

				listItem.appendChild(link);
				repos.appendChild(listItem);
			});
		})
		.catch((err) => {
			console.log(err);
			let listError = document.createElement('li');
			listError.textContent = httpStatus;
			repos.appendChild(listError);
		});
}
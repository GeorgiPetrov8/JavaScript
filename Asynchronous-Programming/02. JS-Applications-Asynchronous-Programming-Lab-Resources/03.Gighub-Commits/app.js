function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let httpStatus = '';
    fetch(url)
        .then((response) => {
            httpStatus = `${response.status} (${response.statusText})`;
            return response.json();
        })
        .then((data) => {
            data.forEach(x => {
                responseUsername = x.commit.committer.name;
                responeMessage = x.commit.message
        
                let listItem = document.createElement('li');
                listItem.textContent = `${responseUsername}: ${responeMessage}`;
                commits.appendChild(listItem);
            })
        })
        .catch(() => {
            let listError = document.createElement('li');
            listError.textContent = 'Error: ' + httpStatus;
            commits.appendChild(listError);
        });
}
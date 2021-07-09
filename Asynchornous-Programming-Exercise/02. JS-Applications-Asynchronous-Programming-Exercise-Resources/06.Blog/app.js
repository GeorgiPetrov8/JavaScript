function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    let selectElement = document.getElementById('posts');
    let loadPostsButt = document.getElementById('btnLoadPosts');
    loadPostsButt.addEventListener('click', () => {
        selectElement.innerHTML = '';

        loadPosts();
        async function loadPosts() {
            try {
                let response = await fetch(postsUrl);
                let data = await response.json();

                for (const key in data) {
                    let currOption = document.createElement('option');
                    currOption.value = key;
                    currOption.textContent = data[key].title;
                    selectElement.appendChild(currOption);
                }

            } catch (err) {
                console.log(err);
            }
        }
    });


    let viewPostButt = document.getElementById('btnViewPost');
    viewPostButt.addEventListener('click', () => {
        let postTitle = document.getElementById('post-title');
        let postBody = document.getElementById('post-body');
        postBody.textContent = '';
        let listComments = document.getElementById('post-comments');
        listComments.innerHTML = '';

        let inputPostId = selectElement.value;
        loadPost(inputPostId);
        loadComments();

        async function loadPost(postId) {
            try {
                let response = await fetch(postsUrl + '/' + postId);
                let data = await response.json();

                postTitle.textContent = data.title;
                postBody.textContent = data.body;
            } catch (err) {
                console.log(err);
            }
        }

        async function loadComments() {
            try {
                let response = await fetch(commentsUrl);
                let data = await response.json();

                for (const key in data) {
                    if (data[key].postId == inputPostId) {
                        let currListItem = document.createElement('li');
                        currListItem.id = data[key].id;
                        currListItem.textContent = data[key].text;

                        listComments.appendChild(currListItem);
                    }
                }

            } catch (err) {
                console.log(err);
            }
        }

    })


}

attachEvents();
function getArticleGenerator(articles) {
    let contentElement = document.getElementById('content');
    return () => {
        if (articles.length > 0) {
            let article = document.createElement('article');
            let paragraph = document.createElement('p');

            paragraph.textContent = articles.shift();
            article.appendChild(paragraph);
            contentElement.appendChild(article);
        }
    }
}

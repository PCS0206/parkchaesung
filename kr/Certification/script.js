document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: '게시글 1',
            image: 'https://via.placeholder.com/300.png?text=Image+1'
        },
        {
            title: '게시글 2',
            image: 'https://via.placeholder.com/300.png?text=Image+2'
        },
        {
            title: '게시글 3',
            image: 'https://via.placeholder.com/300.png?text=Image+3'
        },
        {
            title: '게시글 4',
            image: 'https://via.placeholder.com/300.png?text=Image+4'
        }
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postImage = document.createElement('img');
        postImage.src = post.image;

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        postElement.appendChild(postImage);
        postElement.appendChild(postTitle);

        postsContainer.appendChild(postElement);
    });
});

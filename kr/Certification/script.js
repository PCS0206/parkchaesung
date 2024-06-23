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

    function renderPosts() {
        postsContainer.innerHTML = '';
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
    }

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('postTitle').value;
        const image = document.getElementById('postImage').value;

        posts.push({ title, image });

        renderPosts();

        // 폼 초기화
        document.getElementById('postForm').reset();
    });

    renderPosts();
});

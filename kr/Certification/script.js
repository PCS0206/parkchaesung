// scripts.js
function submitPost() {
    const password = document.getElementById('password').value;
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files[0];

    if (password !== 'admin') {
        alert('비밀번호가 틀렸습니다.');
        return;
    }

    if (!title || !image) {
        alert('제목과 이미지를 입력해주세요.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<img src="${event.target.result}" alt="${title}"><h3>${title}</h3>`;
        document.getElementById('posts').appendChild(post);
    }
    reader.readAsDataURL(image);
}

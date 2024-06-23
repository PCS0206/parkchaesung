// 항목 추가하기 버튼 이벤트 처리
document.getElementById('addButton').addEventListener('click', function() {
  const board = document.querySelector('.board');

  // 새로운 항목 생성
  const newItem = document.createElement('div');
  newItem.classList.add('item');

  const newImage = document.createElement('img');
  newImage.src = 'placeholder.jpg';
  newImage.alt = '게시물 이미지';

  const newTitle = document.createElement('h2');
  newTitle.textContent = '새로운 게시물 제목';

  // 항목에 이미지와 제목 추가
  newItem.appendChild(newImage);
  newItem.appendChild(newTitle);

  // 보드에 새로운 항목 추가
  board.appendChild(newItem);
});

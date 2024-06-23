document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const imageLinks = document.querySelectorAll('.image-link');

  // 이미지 링크를 클릭했을 때 모달 열기
  imageLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 링크 이벤트 제거

      const imageUrl = link.getAttribute('data-image');
      modalImage.src = imageUrl;
      modal.style.display = 'block';
    });
  });

  // 모달 닫기 버튼
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


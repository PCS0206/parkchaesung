document.addEventListener('DOMContentLoaded', function() {
  const boardItems = document.querySelectorAll('.board-item');
  const popupContainer = document.getElementById('popupContainer');
  const popupImage = document.getElementById('popupImage');
  const closePopup = document.getElementById('closePopup');

  // Attach click event listeners to each board item
  boardItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      popupImage.src = imgSrc;
      popupContainer.style.display = 'block';
    });
  });

  // Close popup when close button is clicked
  closePopup.addEventListener('click', function() {
    popupContainer.style.display = 'none';
  });
});


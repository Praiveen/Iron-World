window.addEventListener('scroll', function() {
  var feedbackButton = document.querySelector('.feedback');
  
  if (window.pageYOffset > 200) {
    feedbackButton.style.opacity = '1';
    feedbackButton.style.pointerEvents = 'auto';
  } else {
    feedbackButton.style.opacity = '0';
    feedbackButton.style.pointerEvents = 'none';
  }
});

var likeButton = document.querySelector('.news_like_button');
var image = document.querySelector('.news_like_button img');

likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('clicked');
    if (likeButton.classList.contains('clicked')) {
        image.src = 'pict/news_page1/heart-decoration-svgrepo-com.svg';
    } 
    else {
        image.src = 'pict/news_page1/heart-svgrepo-com.svg';
    }
});



var number = 1;
var what = false;
var likeBut = document.querySelector(".news_like_button");
var disp = document.getElementById("display");

likeBut.addEventListener("click", function() {
  
    if (what) {
        number -= 1;
    } 
    else {
        number += 1;
    }
  
    what = !what;
  
    disp.innerHTML = number;
});

document.getElementById('cartImage').addEventListener('click', function() {
    var popupBlock = document.getElementById('popupBlock');
    var cartImage = document.getElementById('cartImage');
    
    // Получение позиции изображения
    var imagePosition = cartImage.getBoundingClientRect();
    
    // Установка позиции блока
    popupBlock.style.left = imagePosition.left + 'px';
    popupBlock.style.top = (imagePosition.top + imagePosition.height) + 'px';
    
    // Показ блока
    popupBlock.style.display = 'block';
});
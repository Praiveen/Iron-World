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
var number = 1;
var what = false;
var disp = document.getElementById("display");


likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('clicked');
    if (likeButton.classList.contains('clicked')) {
        image.src = 'pict/news_page1/heart-decoration-svgrepo-com.svg';
    } 
    else {
        image.src = 'pict/news_page1/heart-svgrepo-com.svg';
    }
    if (what) {
        number -= 1;
    } 
    else {
        number += 1;
    }
  
    what = !what;
  
    disp.innerHTML = number;
});

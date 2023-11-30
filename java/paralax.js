window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('parallax').style.backgroundPosition = '0px ' + (-scrollPosition / 15) + 'px';
});

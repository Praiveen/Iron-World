document.addEventListener('click', function(e) {
  document.getElementById("clickPosition").innerText = 'X: ' + e.clientX + ' Y: ' + e.clientY
});

document.getElementById("photoOnPage").addEventListener("click", function() {
  if (document.getElementById("outer").style.display == "none") {
        document.getElementById("outer").style.display = "block";
  } else {
        document.getElementById("outer").style.display = "none";
  }

  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');

  outer.style.position = 'absolute';
  outer.style.top = '50%';
  outer.style.left = '50%';
  outer.style.transform = 'translate(-50%, -50%)';

  inner.style.position = 'absolute';
  inner.style.top = '50%';
  inner.style.left = '50%';
  inner.style.width = '300px';
  inner.style.transform = 'translate(-50%, -50%)';
});


var notificationsContainer = document.getElementById('notificationContainer');

notificationsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('close-btn')) {
    var notification = event.target.parentElement;
    notification.style.display = 'none';
  }
});

window.addEventListener('scroll', addDivBlocks);

function addDivBlocks() {
   var scrollPosition = window.scrollY || window.pageYOffset;
   if (scrollPosition >= 200 && scrollPosition <= 400) {
       var newDiv = document.createElement('div');
       newDiv.style.height = '10px';
       newDiv.style.width = '10px';
       newDiv.style.margin = '2px';
       newDiv.style.backgroundColor = 'black';
       var videoPanel = document.getElementById('video-panel');
       videoPanel.appendChild(newDiv);
   }
}
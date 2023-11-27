let counterr = 0;
let intervalId;
const notifTotalObjects = document.querySelector(".notification-base");
const notifTotalObjectsOut = document.querySelector(".notif-total");
function incrementCounter() {
    counterr++;
    let notificationElement = document.createElement('div');
    notificationElement.className = 'notif-block';
    notificationElement.textContent = `Уведомление ${counterr}`;
    document.getElementById('notificationContainer').appendChild(notificationElement);
    if(counterr == 1){
       notifTotalObjects.insertAdjacentHTML("beforeend",`
       <p class="notif-total">${counterr}</p>
       `);
    }
    else if(counterr > 9){
        document.querySelector('.notif-total').innerText = "9+";
    }
    else{
        document.querySelector('.notif-total').innerText = counterr;
    }

 }


intervalId = setInterval(incrementCounter, 100000);

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    else{
        return str;
    }
}

function truncateAll(){
    const texts = document.querySelectorAll(".textContainer");
    texts.forEach(element => {
        let str = element.textContent;
        element.textContent = truncate(str, 300);
    });
}

truncateAll();

function enterForm() {
    if (document.getElementById("enter-modal").style.display == "none") {
        document.getElementById("enter-modal").style.display = "block";
    } else {
        document.getElementById("enter-modal").style.display = "none";
    }
}

function feedbackForm() {
    if (document.getElementById("feedback-modal").style.display == "none") {
        document.getElementById("feedback-modal").style.display = "block";
    } else {
        document.getElementById("feedback-modal").style.display = "none";
    }
}

function callForm() {
    if (document.getElementById("call-modal").style.display == "none") {
        document.getElementById("call-modal").style.display = "block";
    } else {
        document.getElementById("call-modal").style.display = "none";
    }
}

function registrationForm() {
    if (document.getElementById("register-modal").style.display == "none") {
        document.getElementById("register-modal").style.display = "block";
        document.getElementById("enter-modal").style.display = "none";
    } else {
        document.getElementById("register-modal").style.display = "none";
    }
}

var what_need = 1;
function RandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function wordCaptcha() {
    const captchaString = RandomString(6);
    return captchaString;
}

function mathCaptcha() {
    const num1 = Math.floor(Math.random() * 15);
    const num2 = Math.floor(Math.random() * 15);
    const sum = num1 + num2;
    return { num1, num2, sum };
}

function isEmpty(value) {
    return value == '';
}

var what_need = 1;
function generateCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    captchaContainer.innerHTML = '';
    const captchaForm = document.getElementById('submit-button');

    const captchaTextElement = document.getElementById("image");

    const submitButton = document.getElementById('submit-button');


    const captchaInput = document.getElementById("submit_code");
    captchaInput.value = "";

    let captcha;
    let captchaText;
    if (what_need == 1) {
        captcha = wordCaptcha();
        captchaText = 'Введите капчу из букв: ' + captcha;
    } else if (what_need == 2) {
        captcha = mathCaptcha();
        captchaText = 'Решите пример: ' + captcha.num1 + ' + ' + captcha.num2;
    }

    captchaTextElement.textContent = captchaText;

    if (what_need == 2){
        submitButton.disabled = true;
    }

    if (what_need == 3){
        submitButton.style.display = "none";
        captchaInput.style.display = "none";
    }


    captchaText = "";
    captchaInput.addEventListener('input', function () {
        if(what_need == 2){
            if (parseInt(captchaInput.value) === captcha.sum) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
                what_need = 2;
            }
        }
    });

    
    captchaForm.addEventListener('click', function() {
        if (what_need == 1) {
            isGood = isEmpty(captchaInput.value);
            if (isGood == false){
                if (captchaInput.value == captcha){
                    alert('Капча пройдена!');
                    what_need = 3;
                    generateCaptcha();
                } else {
                    alert("Плохо, попробуйте с числами")
                    what_need = 2;
                    generateCaptcha();
                }
            }
            else{
                alert("Введите не пустое значение!")
            }
        } 
        else if (what_need == 2) {
            alert("Ураааааа!! Капча пройдена!")
            what_need = 3;
            generateCaptcha();
        }
    });
}
generateCaptcha();

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

document.getElementById("cartImage").addEventListener("click", function() {
  document.getElementById("storage").style.display = "block";
});


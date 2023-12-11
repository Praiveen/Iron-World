function enterForm() {
    if (document.getElementById("enter-modal").style.display == "none") {
        document.getElementById("enter-modal").style.display = "block";
    } else {
        document.getElementById("enter-modal").style.display = "none";
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


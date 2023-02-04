let form = document.forms['contactForm'];

form.onsubmit = function(event) {
    event.preventDefault();

    clearForm();
    checkForm();
}

form.addEventListener('keyup', checkForm)

function checkForm () {
    let nameRef = form.name.value;
    let emailRef = form.email.value;
    // let textAreaRef = form.textArea.value;

    console.log("entrou na checkForm")

    if (nameRef === "") {
        showError("nameError-msg", "Seu nome é muito importante");
        showIconError("nameError-icon");
        showBorderError("name-input");
    } else {
        clearForm();
    }

}

function showError (errorElement, errorMsg) {
    let warnings = document.querySelector("."+errorElement);

    console.log("entrou na showError")

    // warnings.style.display= "block";
    warnings.classList.add("display-error")
    warnings.innerHTML = errorMsg;
}

function showIconError (iconElement) {
    let icons = document.querySelector("."+iconElement);

    console.log("entrou na showIconError")

    // icons.style.display= "block";
    icons.classList.add("display-error")
}

function showBorderError(inputElement) {
    let borders = document.querySelector("."+inputElement);

    console.log("entrou na showBorderError");

    // borders.style.border = "3px solid #cd2424";
    borders.classList.add("display-border");
}

function clearForm() {
    let errors = document.querySelectorAll(".error-msg");
    let icons = document.querySelectorAll(".error-icon");
    let borders = document.querySelectorAll(".input-area");

    console.log("entrou na clearForm");

    errors.forEach((item) => item.classList.remove("display-error"))
    icons.forEach((item) => item.classList.remove("display-error"))
    borders.forEach((item) => item.classList.remove("display-border"))
}
// let form = document.forms['contactForm'];
const form = document.querySelector(".contact-form");
const nameRef = document.querySelector(".name-input");
const emaileRef = document.querySelector(".email-input");
const textAreaRef = document.querySelector(".name-input");
let errorCounter = 0;


// form.onsubmit = function(event) {
//     event.preventDefault();

//     clearForm();
//     checkForm();
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkForm();

    reloadPage();
})

form.addEventListener('keyup', (e) => {
    e.preventDefault();

    checkForm();
})

function checkForm () {
    let nameRefValue = form.name.value.trim();
    let emailRef = form.email.value.trim();
    // let textAreaRef = form.textArea.value;

    console.log("entrou na checkForm")

    if (nameRefValue === "") {
        showError("nameError-msg", "Seu nome é muito importante");
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter++;
        console.log("erroCounter = " + errorCounter)
    } else if (checkName(nameRefValue) !== true) {
        showError("nameError-msg", "Nome deve conter pelo menos 3 letras e sem números")
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter++;
        console.log("erroCounter = " + errorCounter)
    }
    else {
        removeErrors("nameError-msg", "nameError-icon", "name-input");
    };
}

function showError (errorElement, errorMsg) {
    let warnings = document.querySelector("." + errorElement);

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

function checkName (inputRef) {
    let namesRule = /^[a-zA-Z]{3,20}(\s[a-zA-Z]{1,19}){0,1}$/;
    return namesRule.test(inputRef);
}

function checkFormRules (elementRef) {
    let namesRule = /^[a-zA-Z]{3,20}(\s[a-zA-Z]{3,19}){0,1}$/;

    console.log("entrou no checkFormRules")

    if (namesRule.test(elementRef) === false) {
        console.log(namesRule.test(elementRef))
        return false;
    }
}

function removeErrors(msg, icon, input) {
    // msg.innerHTML = "";
    console.log("entrou no removeErrors")
    console.log("erroCounter = " + errorCounter)
    document.querySelector("." + msg).classList.remove("display-error");
    document.querySelector("." + msg).innerHTML = "";
    document.querySelector("." + icon).classList.remove("display-error");
    document.querySelector("." + input).classList.remove("display-border");

    errorCounter = 0;
}

function clearForm() {
    let errors = document.querySelectorAll(".error-msg");
    let icons = document.querySelectorAll(".error-icon");
    let borders = document.querySelectorAll(".input-area");

    console.log("entrou na clearForm");
    if(errorCounter === 0){
    errors.forEach((item) => item.classList.remove("display-error"));
    errors.forEach((item) => item.innerHTML = "");
    icons.forEach((item) => item.classList.remove("display-error"));
    borders.forEach((item) => item.classList.remove("display-border"));
    }
}

function reloadPage() {
    if(errorCounter === 0) {
        location.reload();
    }
}
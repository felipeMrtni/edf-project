const form = document.forms['contactForm'];
const inputBox = document.querySelectorAll(".form-input-box");
let nameInput = document.querySelector(".name-input").value;
let emailInput = document.querySelector(".email-input").value;
let textAreaInput = document.querySelector(".text-area-input").value;
let errorCounter = true;

inputBox.forEach((item) => {
    console.log(item);
    const inputArea = item.querySelector(".input-check");
    console.log(inputArea)
    inputArea.addEventListener('keyup', (e) => {
        const inputAreaName = inputArea.name;

        e.preventDefault();

        checkArea(inputAreaName, inputArea);
    })

})

form.addEventListener("focusout", (e) => {
    e.preventDefault();

    clearForm();
})

form.onsubmit = function(event) {
    event.preventDefault();

    checkForm(nameInput, emailInput, textAreaInput);

    reloadPage();
}

function checkArea(name, input) {

    const valueRef = input.value;

    if(name === "name") {
        checkNameForm(valueRef);
    }
    if (name === "email") {
        checkEmailForm(valueRef);
    }
    if (name === "textArea") {
        checkTextAreaForm(valueRef);
    }
}

function checkNameForm (value) {

    if (value === "") {
        showError("nameError-msg", "Seu nome é muito importante");
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
        nameInput = value
    } else if (checkName(value) !== true) {
        showError("nameError-msg", "Nome deve conter pelo menos 3 letras e sem números")
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
        nameInput = value
    }
    else {
        removeErrors("nameError-msg", "nameError-icon", "name-input");
        nameInput = value;
    };
}

function checkEmailForm (value) {

    if (value === "") {
        showError("emailError-msg", "Precisamos de um e-mail para contato!");
        showIconError("emailError-icon");
        showBorderError("email-input");
        errorCounter = true;
        emailInput = value;
    } else if (checkEmail(value) !== true) {
        showError("emailError-msg", "Informação inválida")
        showIconError("emailError-icon");
        showBorderError("email-input");
        errorCounter = true;
        emailInput = value;
    }
    else {
        removeErrors("emailError-msg", "emailError-icon", "email-input");
        emailInput = value;
    };
}

function checkTextAreaForm (value) {

    if (value === "") {
        showError("textAreaError-msg", "Não esqueça de deixar sua mensagem!");
        showIconError("textAreaError-icon");
        showBorderError("text-area-input");
        errorCounter = true;
        textAreaInput = value;
    } 
    else {
        removeErrors("textAreaError-msg", "textAreaError-icon", "text-area-input");
        textAreaInput = value;
    };
}

function showError (errorElement, errorMsg) {
    let warnings = document.querySelector("." + errorElement);

    warnings.classList.add("display-error")
    warnings.innerHTML = errorMsg;
}

function showIconError (iconElement) {
    let icons = document.querySelector("."+iconElement);

    icons.classList.add("display-error")
}

function showBorderError(inputElement) {
    let borders = document.querySelector("."+inputElement);

    borders.classList.add("display-border");
}

function checkName (name) {
    let namesRule = /^[a-zA-Z]{3,20}(\s[a-zA-Z]{1,19}){0,1}$/;
    return namesRule.test(name);
}

function checkEmail (email) {
    let correctEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return correctEmail.test(email);
}

function removeErrors(msg, icon, input) {
    document.querySelector("." + msg).classList.remove("display-error");
    document.querySelector("." + msg).innerHTML = "";
    document.querySelector("." + icon).classList.remove("display-error");
    document.querySelector("." + input).classList.remove("display-border");

    errorCounter = false;
}

function clearForm() {
    let errors = document.querySelectorAll(".error-msg");
    let icons = document.querySelectorAll(".error-icon");
    let borders = document.querySelectorAll(".input-check");

    errors.forEach((item) => item.classList.remove("display-error"));
    errors.forEach((item) => item.innerHTML = "");
    icons.forEach((item) => item.classList.remove("display-error"));
    borders.forEach((item) => item.classList.remove("display-border"));

}

function checkForm(name, email, textArea) {
    checkNameForm(name);
    checkEmailForm(email);
    checkTextAreaForm(textArea);
}

function reloadPage() {
    if(errorCounter === false) {
        location.reload();
    } else {
        event.preventDefault();
    }
}

// -------------------------------------------------------------------------------------------
// jeito antigo

// let form = document.forms['contactForm'];
const form = document.querySelector(".contact-form");
const nameRef = document.querySelector(".name-input");
const emailRef = document.querySelector(".email-input");
const textAreaRef = document.querySelector(".name-input");
let errorCounter = false;


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

// form.addEventListener('keyup', (e) => {
//     e.preventDefault();

//     checkForm();
// })

//FAZER UM FOREACH COM OS INPUT-AREA PRA CHECAR UM DE CADA VEZ
const inputBox = document.querySelectorAll(".form-input-box");

inputBox.forEach((item) => {
    console.log(item);
    const inputArea = item.querySelector(".input-check");
    console.log(inputArea)
    inputArea.addEventListener('click', (e) => {
        e.preventDefault();

        checkForm();
    })

})



// nameRef.addEventListener('keyup', (e) => {
//     e.preventDefault();

//     checkForm();
// })
// emailRef.addEventListener('keyup', (e) => {
//     e.preventDefault();

//     checkForm();
// })


// form.addEventListener('keyup', (e) => {
//     e.preventDefault();

//     checkForm();
// })

function checkForm () {
    let nameRefValue = form.name.value.trim();
    let emailRefValue = form.email.value.trim();
    // let textAreaRef = form.textArea.value;

    console.log("entrou na checkForm")

    if (nameRefValue === "") {
        showError("nameError-msg", "Seu nome é muito importante");
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
        console.log("erroCounter = " + errorCounter)
    } else if (checkName(nameRefValue) !== true) {
        showError("nameError-msg", "Nome deve conter pelo menos 3 letras e sem números")
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
        console.log("erroCounter = " + errorCounter)
    }
    else {
        removeErrors("nameError-msg", "nameError-icon", "name-input");
    };

    if (emailRefValue === "") {
        showError("emailError-msg", "Precisamos de um e-mail para contato!");
        showIconError("emailError-icon");
        showBorderError("email-input");
        errorCounter = true;
        console.log("erroCounter = " + errorCounter)
    } else if (checkEmail(emailRefValue) !== true) {
        showError("emailError-msg", "Informação inválida")
        showIconError("emailError-icon");
        showBorderError("email-input");
        errorCounter = true;
        console.log("erroCounter = " + errorCounter)
    }
    else {
        removeErrors("emailError-msg", "emailError-icon", "email-input");
    };

    if (nameRefValue === "") {
        showError("nameError-msg", "Seu nome é muito importante");
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
        console.log("erroCounter = " + errorCounter)
    } else if (checkName(nameRefValue) !== true) {
        showError("nameError-msg", "Nome deve conter pelo menos 3 letras e sem números")
        showIconError("nameError-icon");
        showBorderError("name-input");
        errorCounter = true;
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

function checkName (name) {
    let namesRule = /^[a-zA-Z]{3,20}(\s[a-zA-Z]{1,19}){0,1}$/;
    return namesRule.test(name);
}

function checkEmail (email) {
    let correctEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return correctEmail.test(email);
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

    errorCounter = false;
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
    if(errorCounter === false) {
        location.reload();
    }
}
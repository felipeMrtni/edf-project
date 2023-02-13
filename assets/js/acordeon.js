// Create a condition that targets viewports at least 800px wide
const mediaQuery = window.matchMedia('(max-width: 800px)');
const services = document.querySelectorAll('.services');
const questions = document.querySelectorAll('.acordeon-question');
const answers = document.querySelectorAll('.acordeon-answer');
const answers_span = document.querySelectorAll('.acordeon-answer span');
const answers_list = document.querySelectorAll('.acordeon-answer li');
const icons = document.querySelectorAll('.icon');
let areaListener = new AbortController();

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    
    console.log('Media Query Matched!')
    mobileMode();
    
  } else {
    console.log('Media Query Did NOT Match!')
    desktopMode();
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery);




function desktopMode () {
    services.forEach((item) => (item.classList.remove('mobileService')));
    questions.forEach((item) => (item.classList.remove('mobileQuestion')));
    // questions.forEach((item) => (item.removeEventListener('click', )));
    answers.forEach((item) => (item.classList.remove('mobileAnswer')));
    answers.forEach((item) => (item.style.height = '100%'));
    answers_span.forEach((item) => (item.style.display= 'block'));
    answers_list.forEach((item) => (item.style.display= 'block'));
    icons.forEach((item) => (item.classList.remove('mobileIcon')));

    // areaListener.abort();
    defaultConfig();
    removeEvent();
}

function mobileMode () {
    services.forEach((item) => (item.classList.add('mobileService')));
    questions.forEach((item) => (item.classList.add('mobileQuestion')));
    answers.forEach((item) => (item.classList.add('mobileAnswer')));
    answers_span.forEach((item) => (item.style.display= 'none'));
    answers_list.forEach((item) => (item.style.display= 'none'));
    icons.forEach((item) => (item.classList.add('mobileIcon')));
    questions.forEach((item) => (item.classList.remove('active')));

    acordeon();
}

function removeEvent() {
    console.log (" ----- entrou no removeEvent")
    areaListener.abort();
    areaListener = new AbortController();
}

// ------------------------------------- acordeon ------------------------------------
function acordeon () {    
    console.log("entrou na funcao")
    const itemButton = document.querySelectorAll('.mobileService');
    itemButton.forEach((item) => {
        const question_acordeon = item.querySelector('.mobileQuestion');
        console.log(" ------ entrou no forEach")
        addListener(question_acordeon, item);
    })
}

    
function addListener(question_acordeon, item) {
    console.log(" ------ entrou no eventListener")
    question_acordeon.addEventListener('click',() => {
        const answer_acordeon = item.querySelector('.mobileAnswer');
        const answer_active = item.querySelector('.active');
        console.log(" ------ entrou no buttonActive")
        checkActive(item, answer_acordeon, answer_active)
    },{signal: areaListener.signal});
}

function checkActive(item, answer, answer_active) {
        const icon_acordeon = item.querySelector(".icon");
        let answer_span = item.querySelectorAll('.mobileAnswer span');
        let answer_list = item.querySelectorAll('.mobileAnswer li');

        console.log(" ------ entrou no checkActive");
        defaultConfig(item)

        if (answer_active) {
            answer_active.classList.remove("active");
            answer_span.forEach((span) => (span.style.display = 'none'));
            answer_list.forEach((li) => (li.style.display = 'none'));
            // answer_list.forEach((li) => (li.style.height = 0));
            answer_active.style.height = 0; // ok
            console.log(" ------ entrou no answer_active");
        }

        else if (answer !== answer_active) {
            answer.classList.add("active");
            answer_span.forEach((span) => (span.style.display = 'block'));
            answer_list.forEach((li) => (li.style.display = 'block'));
            // answer_list.forEach((li) => (item.style.height = li.scrollHeight + 0 + "px"));
            answer.style.height = answer.scrollHeight + 0 + "px"; //ok
            // answer.style.height = '100%'; ok
            icon_acordeon.style.rotate = "180deg";
            console.log(" ------ entrou no answer !== answer_active")
        }
}

function defaultConfig(item) {
    const icons_acordeon = document.querySelectorAll(".icon");
    const answers_acordeon = document.querySelectorAll(".mobileAnswer")
    const answers_span_acordeon= document.querySelectorAll(".mobileAnswer span");
    const answers_list_acordeon= document.querySelectorAll(".mobileAnswer li");
    console.log(" ------ entrou no defaultConfig")
    icons_acordeon.forEach((item) => (item.style.rotate = "0deg"));
    answers_span_acordeon.forEach((item) => (item.style.display = 'none'));
    answers_list_acordeon.forEach((item) => (item.style.display = 'none'));
    answers_acordeon.forEach((item) => (item.style.height = 0));
    answers_acordeon.forEach((item) => (item.classList.remove('active')));
}
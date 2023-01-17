const menuItems = document.querySelectorAll('.navbar-container a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();

    const to = getScrollTopByHref(event.target) - 64;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const clientMenu = document.querySelector('#clients-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3250) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        clientMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3945) {
        clientMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 6000) {
        contactMenu.classList.add('highlight');
        clientMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 500) || elem) {
    elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
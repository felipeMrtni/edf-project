// --------------------------------------------------------------------
// HIGHLIGHT MENU
const menuItems = document.querySelectorAll('.navbar-menu a');

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
    const licencasMenu = document.querySelector('#licencas-page');
    const projetosMenu = document.querySelector('#projetos-page');
    const geoMenu = document.querySelector('#geoprocessamento-page');
    const analisesMenu = document.querySelector('#analises-page');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 1100 && scrollPos < 500) {
        homeMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1100 && scrollPos < 2600) {
        licencasMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projetosMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1100 && scrollPos < 5550) {
        projetosMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        geoMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1100 && scrollPos < 7400) {
        geoMenu.classList.add('highlight');
        projetosMenu.classList.remove('highlight');
        analisesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1100 && scrollPos < 10000) {
        analisesMenu.classList.add('highlight');
        geoMenu.classList.remove('highlight');
        return;
    }

    if (window.innerWidth > 970 && scrollPos < 500) {
        homeMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 970 && scrollPos < 1300) {
        licencasMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projetosMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 970 && scrollPos < 3650) {
        projetosMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        geoMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 970 && scrollPos < 4345) {
        geoMenu.classList.add('highlight');
        projetosMenu.classList.remove('highlight');
        analisesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 970 && scrollPos < 6000) {
        analisesMenu.classList.add('highlight');
        geoMenu.classList.remove('highlight');
        return;
    }

    if (window.innerWidth > 800 && scrollPos < 500) {
        homeMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 800 && scrollPos < 1500) {
        licencasMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projetosMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 800 && scrollPos < 3750) {
        projetosMenu.classList.add('highlight');
        licencasMenu.classList.remove('highlight');
        geoMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 800 && scrollPos < 4745) {
        geoMenu.classList.add('highlight');
        projetosMenu.classList.remove('highlight');
        analisesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 800 && scrollPos < 6000) {
        analisesMenu.classList.add('highlight');
        geoMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 1100 && scrollPos < 500) || elem) {
    elem.classList.remove('highlight');
    }
    if((elem && window.innerWidth < 970 && scrollPos < 500) || elem) {
    elem.classList.remove('highlight');
    }
    if((elem && window.innerWidth < 800 && scrollPos < 500) || elem) {
    elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
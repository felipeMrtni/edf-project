const menuItems = document.querySelectorAll('.navbar-menu a');

console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();

    const to = getScrollTopByHref(event.target);

    window.scroll({
        top: to - 160,
        behavior: "smooth"
    })
}

function getScrollTopByHref (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
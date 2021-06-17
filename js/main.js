const hamburgerBtn = document.querySelector('.navigation__menu-btn');
const extendedNav = document.querySelector('.extended-nav')
const navText = document.querySelectorAll('.sidebar__nav__link span');

let navOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!navOpen) {
        hamburgerBtn.classList.add('navigation__menu-btn-open');
        extendedNav.classList.add('extended-nav-open');
        navText.forEach(text => text.classList.add('nav-open'));
        navOpen = true;
    } else {
        hamburgerBtn.classList.remove('navigation__menu-btn-open');
        extendedNav.classList.remove('extended-nav-open');
        navText.forEach(text => text.classList.remove('nav-open'));
        navOpen = false;
    }
});
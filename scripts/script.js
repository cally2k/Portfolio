// Intro Anim
const openAnim = document.getElementById('openAnim');
openAnim.addEventListener("animationend", () => {
    openAnim.remove();
})

// Burger Menu
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');

let showMenu = false;

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        burgerMenu.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        navItem.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        burgerMenu.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navItem.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

// -- Intro Anim--
const openAnim = document.getElementById('openAnim');
openAnim.addEventListener("animationend", () => {
    openAnim.remove();
})

// -- Mobile Nav Menu --

// Nav Menu Elements
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');

// Nav Links
const navHome = navLink[0]
const navAbout = navLink[1]
const navSkills = navLink[2]
const navProjects = navLink[3]


// Menu closed by default
let showMenu = false;

// Execute togglemenu function on button click
burger.addEventListener('click', toggleMenu);

navHome.addEventListener('click', toggleMenu);
navAbout.addEventListener('click', toggleMenu);
navSkills.addEventListener('click', toggleMenu);
navProjects.addEventListener('click', toggleMenu);

// Toggle menu visibility
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

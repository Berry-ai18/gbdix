const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('open');
    nav.classList.toggle('open');
});
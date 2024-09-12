// Toggle class active
const menuNavbar = document.querySelector('.menu-navbar')

// ketika hamburger menu di klik //
document.querySelector('#hamburger-menu').onclick = () => {
    menuNavbar.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan nav //
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !menuNavbar.contains(e.target)) {
        menuNavbar.classList.remove('active');
    }
})
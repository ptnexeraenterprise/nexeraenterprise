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

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// klik tombol close modal 
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display ='none';
    e.preventDefault();
}

// klik diluar modal 
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display =  'none';
    }
};
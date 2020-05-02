let phoneIcon = document.querySelector('.phone_icon');
let modal = document.querySelector('.modal');
let closeIcon = document.querySelector('.close');
let hamburgerIcon = document.querySelector('.fa-bars');
let hamburgerModal = document.querySelector('.hamburger_modal');
let overlay = document.querySelector('.overlay');
let hamburgerCloseIcon = document.querySelector('.hamburger_close');




phoneIcon.addEventListener('click', () => {
	modal.style.right = '0';
});

closeIcon.addEventListener('click', () => {
	modal.style.right = '-300px';
});

hamburgerIcon.addEventListener('click', () => {
	hamburgerModal.style.right = '0';
	overlay.style.right = '0';
	phoneIcon.style.display = 'none';
});

hamburgerCloseIcon.addEventListener('click', () => {
	hamburgerModal.style.right = '-500px';
	overlay.style.right = '-500px';
	phoneIcon.style.display = 'flex';
});
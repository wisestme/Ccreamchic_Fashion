// VARIABLES DECLARATIONS
let phoneIcon = document.querySelector('.phone_icon');
let modal = document.querySelector('.modal');
let closeIcon = document.querySelector('.close');
let hamburgerIcon = document.querySelector('.fa-bars');
let hamburgerModal = document.querySelector('.hamburger_modal');
let overlay = document.querySelector('.overlay');
let hamburgerCloseIcon = document.querySelector('.hamburger_close');



// COLLAPSE/EXPAND QUICK CONTACT MODAL
phoneIcon.addEventListener('click', () => {
	modal.style.right = '0';
});

closeIcon.addEventListener('click', () => {
	modal.style.right = '-300px';
});

// COLLAPSE/EXPAND HAMBURGER MENU
hamburgerIcon.addEventListener('click', () => {
	hamburgerModal.style.right = '0';
	overlay.style.right = '0';
	phoneIcon.style.display = 'none';
});

hamburgerCloseIcon.addEventListener('click', () => {
	hamburgerModal.style.right = '-100vw';
	overlay.style.right = '-100vw';
	phoneIcon.style.display = 'flex';
});

// First Slider
$('.slider_one')
	.not('slick-initialized')
	.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".prev",
	nextArrow: ".next"
});

//$('.slider_one').slick();
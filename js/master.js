let phoneIcon = document.querySelector('.phone_icon');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');


phoneIcon.addEventListener('click', () => {
	modal.style.right = '0';
});

close.addEventListener('click', () => {
	modal.style.right = '-300px';
})
let categoriesBanner = document.querySelector('#categories');
console.log(categoriesBanner);
let myScroller = function () {
	let y = window.scrollY;
	if(y >= 600) {
		categoriesBanner.style.display = 'block';
	} else {
		categoriesBanner.style.display = 'none';
	} 
};

window.addEventListener('scroll', myScroller);
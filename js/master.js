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

// CATEGORY SLIDER
$('.categories_slider')
	.not('slick-initialized')
	.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 6,
	slidesToScroll:3,
	dots: true,
	prevArrow: ".prev",
	nextArrow: ".next",
	responsive: [
		{
			breakpoint: 550,
			settings: {
				slidesToShow:2,
				slidesToScroll:1
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow:3,
				slidesToScroll:1
			}
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow:4,
				slidesToScroll:2
			}
		}
	]
});

	// Magnyfying Glass idea from codepen
let zoomImages = document.querySelectorAll('.product');
console.log(zoomImages);
for(let zoomImage of zoomImages) {
   //zoomImage.style.backgroundImage = "url(img/slip001.jpg)";
   let currentImage = zoomImage.childNodes;
   zoomImage.addEventListener('mousemove', function(e) {
    var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
// console.log(zoomer.childNodes[1]);
// console.log(zoomer);
let zoomerSource = zoomer.childNodes[1].getAttribute('src');
//console.log(zoomerSource);

  zoomer.style.backgroundImage = `url(${zoomerSource})`;
    // console.log(e.currentTarget);
   })
 }

// EXPAND SELECTED PRODUCT
let galleryProducts = document.querySelectorAll('.gallery_product');
var expandProductModal = document.getElementById('view_product');
var getSelectedProduct = document.getElementById('selected_product');
var getModalOverlay = document.getElementById('overlay_expanded');
var getModalContainer = document.getElementById('expand_product');
var closeModal = document.getElementById('close_modal');



// DISPLAY CLICKED PRODUCT
for (product of galleryProducts) {
	product.addEventListener('click', function() {
		//console.log('product clicked');
		//console.log(this.id, typeof(this.id));
		var linkImage = document.getElementById(this.id);
		console.log(linkImage);
		expandProductModal.style.display = 'block';
		getSelectedProduct.src = './images/cream'+this.id+'.jpg';
		getModalOverlay.style.top = 0;
		getModalContainer.style.top = 0;
	})
}

// REMOVE DISPLAYED PRODUCT
// AND SHOW PREVIOUS SCREEN
closeModal.addEventListener('click', function() {
	getModalOverlay.style.top = '-100vh';
	getModalContainer.style.top = '-100vh';
})
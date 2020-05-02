// First Slider
$('.slider-one')
	.not('slick-initialized')
	.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".site-slider .slider-btn .prev",
	nextArrow: ".site-slider .slider-btn .next"
});

//Second Slider
$('.slider-two')
	.not('slick-initialized')
	.slick({
	 //autoplay: true,
	 //autoplaySpeed: 3000,
	 //dots: true,
	prevArrow: ".site-slider-two .prev",
	nextArrow: ".site-slider-two .next",
	slidesToShow: 5,
	slidesToScroll:2,
	// centerMode: true,
	// variableWidth: true,
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
				slidesToShow:4
			}
		}
	]

});

// const mq = window.matchMedia( "(max-width: 500px)" );
// let header = document.querySelector('#header');

// window.addEventListener('resize', mediaQueryJS)
// function mediaQueryJS() {
// 	if (mq.matches) {
// 	header.style.background = 'red';
	
// 	} else {
// 		header.style.background = 'blue';
// 		$('.slider-two')
// 	.not('slick-initialized')
// 	.slick({
// 	 //autoplay: true,
// 	 //autoplaySpeed: 3000,
// 	 //dots: true,
// 	prevArrow: ".site-slider-two .prev",
// 	nextArrow: ".site-slider-two .next",
// 	slidesToShow: 4,
// 	slidesToScrol:1,
// });
// 	}
// }
// if (mq.matches) {
// 	$('.slider-two')
// 	.not('slick-initialized')
// 	.slick({
// 	 //autoplay: true,
// 	 //autoplaySpeed: 3000,
// 	 //dots: true,
// 	prevArrow: ".site-slider-two .prev",
// 	nextArrow: ".site-slider-two .next",
// 	slidesToShow: 4,
// 	slidesToScrol:1,
// });
// } else {
// 	$('.slider-two')
// 	.not('slick-initialized')
// 	.slick({
// 	 //autoplay: true,
// 	 //autoplaySpeed: 3000,
// 	 //dots: true,
// 	prevArrow: ".site-slider-two .prev",
// 	nextArrow: ".site-slider-two .next",
// 	slidesToShow: 5,
// 	slidesToScrol:1,
// });
// }

// if (mq.matches) {
// 	header.style.background = 'red';
// 	} else {
// 		header.style.background = 'blue';
// 	}

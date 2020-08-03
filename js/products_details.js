let products = [
	{
		'id': '0001',
		'name': 'Anew Vitamin C Glow Set',
		'price': 23280,
		'description': 'Combine this Triple System and enjoy maximum Results of Radiance and Youthful Glow on your Face.',
		'details': 'Can be bought as a Combo or individually. Suitable for All Skin Types'
	},

	{
		'id': '0002',
		'name': 'Anew Vitamin C Glow Set',
		'price': 23280,
		'description': 'Product 2',
		'details': 'Can be bought as a Combo or individually. Suitable for All Skin Types'
	},

	{
		'id': '0003',
		'name': 'Anew Vitamin C Glow Set',
		'price': 23280,
		'description': 'Product 3.',
		'details': 'Can be bought as a Combo or individually. Suitable for All Skin Types'
	},

	{
		'id': '0004',
		'name': 'Black Suede',
		'price': 23280,
		'description': 'Nodescription yet',
		'details': 'No details yet'
	},

	{
		'id': '0005',
		'name': 'Avon Care Hand Creams',
		'price': 1200,
		'description': 'Our Collection of Handcreams ranges from Intense Hydration to Anti ageing. ',
		'details': 'Smells nice, 75ml each. Suitable for All Skin Types. '
	},

	{
		'id': '0006',
		'name': 'Face Mask Collection',
		'price': 1200,
		'description': 'Choose the Mask that\'s right for your skin and give your skin a treat.',
		'details': 'Avon Skincare Collection of Face Mask for everyday use.'
	},

	{
		'id': '0007',
		'name': 'True Glimmerstick Eyeliner',
		'price': 1200,
		'description': 'Make an impact with our array of bold Eyeliners.',
		'details': 'Creamy and Smooth Glide on. Perfect Precision.'
	},

	{
		'id': '0008',
		'name': 'True Nourishing Lip Oil',
		'price': 1200,
		'description': 'Non- sticky Lip Oil with a tint of Colour.',
		'details': ' It promises to lock in 3 times more moisture. Enriched with Jojoba, Avocado and Coconut Oil alongside Vitamin E.'
	},

	{
		'id': '0009',
		'name': 'Naturals Kids Body Wash',
		'price': 1200,
		'description': 'Gently Cleansing 2 in 1 Bubble Body Wash.',
		'details': 'Tear Free Foaming 2 in 1.'
	},
	
	{
		'id': '0010',
		'name': 'Perfect Wear 8-in-1 Eyeshadow',
		'price': 1200,
		'description': 'Impactful Eye Shadow in beautiful new shades.',
		'details': 'Has a built in primer for even, smooth application. '
	},

	{
		'id': '0011',
		'name': 'Planet Spa Ayurveda Set of 3',
		'price': 1200,
		'description': 'Ayurveda Body Butter, Multi-Use Oil and Face Mask to Pamper your Skin.',
		'details': 'Calming, Exfoliation and Pore-Minimising.'
	},
	
	{
		'id': '0012',
		'name': 'Powerstay Concealer',
		'price': 1200,
		'description': 'When you have dark circles and imperfections, concealers can be godsend!',
		'details': '18 Hours of just applied freshness is at your fingertips. '
	},
	
	{
		'id': '0013',
		'name': 'Nutra Effects Soothe Micellar Range',
		'price': 1200,
		'description': 'Flawless looking Skin anyone?',
		'details': 'Wipe, Gel Cleanser, Micellar Water, Face Cream'
	},
	
	{
		'id': '0014',
		'name': 'Bubble Bath Range',
		'price': 1200,
		'description': 'Family Size Bathroom Heroes in 1000ml',
		'details': '1,000ml'
	},
	
	{
		'id': '0015',
		'name': 'Pure Temptation by Tabitha Webb',
		'price': 1200,
		'description': 'A light & feminine fragrance perfect to take you from Day into Night',
		'details': 'EDT 75ml'
	},
	
	{
		'id': '0016',
		'name': 'Skin So Soft',
		'price': 1200,
		'description': 'Original Dry Oil Spray with Jojoba',
		'details': 'For moisturised, smooth and nourished skin, dry oil spray infused with natural oils 150ml'
	},
	
	{
		'id': '0017',
		'name': 'Attraction for Her Essence De Parfum',
		'price': 1200,
		'description': 'Luxury in just 1 Drop. Captured in a luxury gel of upto 200 drops. ',
		'details': 'EDP 15ml'
	},
	
	{
		'id': '0018',
		'name': 'Mesmerize Black For Her Set',
		'price': 1200,
		'description': 'A magically hypnotic cocktail of mandarin and delicious red fruits, rich jasmine, sensual sandalwood and seductive tonka beans.',
		'details': 'EDT 50ml, Body Lotion 150ml'
	},
	
	{
		'id': '0019',
		'name': 'Luck For Him Set',
		'price': 1200,
		'description': 'Want a fragrance for men truly intoxicating? Look no further ',
		'details': 'EDT 75ml, Body Spray 150ml, Hair & Body Wash 200ml'
	},
	
	{
		'id': '0020',
		'name': 'Tahitian Holiday Set',
		'price': 1200,
		'description': 'Love Coconut Scents? Here\'s the Scent of Summer',
		'details': 'EDT 50ml, Body Mist 150ml'
	},

	{
		'id': '0021',
		'name': 'Far Away Infinity Set',
		'price': 1200,
		'description': 'How Far can you go to smell Great? Escape to an exotic land with this Set',
		'details': 'EDP 50ml, Body Lotion 150ml, Purse Spray 10ml'
	},

	{
		'id': '0022',
		'name': 'Anew Ultimate Skincare Program Kit',
		'price': 1200,
		'description': 'Four Steps to Younger looking Skin in 2 weeks for Age 45-55.',
		'details': 'Contains a Day Cream, Night Cream, Eye Cream & Serum.'
	},

	{
		'id': '0023',
		'name': 'Beauty Sleep Pyjamas Set',
		'price': 1200,
		'description': 'Step into the Beauty Sleep like a Queen in these Cotton P.J Set',
		'details': 'Available in 8-10, 12-14, 16-18(Low Stock)'
	}
	
]

// EXPAND SELECTED PRODUCT
galleryProducts = document.querySelectorAll('.gallery_product');
// var expandProductModal = document.getElementById('view_product');
// var getSelectedProduct = document.getElementById('selected_product');
// var getModalOverlay = document.getElementById('overlay_expanded');
// var getModalContainer = document.getElementById('expand_product');
// var closeModal = document.getElementById('close_modal');
// var holdProductName = document.getElementById('product_name');
var premiumProducts = document.querySelectorAll('.premium');

var getProductDescription = document.querySelector('.description');
var getProductDetails = document.querySelector('.details');





// DISPLAY CLICKED PRODUCT
for (premium of premiumProducts) {
	premium.addEventListener('click', function() {
		var premiumName = 'Avon' + this.getAttribute('name');
		var productID = this.getAttribute('id');
		console.log(typeof productID);

		//get  clicked product 
		var clickedObject = products.filter(product => {
			return product.id === productID;
		})
		console.log(clickedObject[0].description);

		// add description to modal
		var productDescription = clickedObject[0].description;
		getProductDescription.textContent = productDescription;

		// add details to modal
		var productDetails = clickedObject[0].details;
		getProductDetails.textContent = productDetails;
		console.log(productDetails)

		getSelectedProduct.src = './images/premium/cream'+this.id+'.jpg';
		getModalOverlay.style.top = 0;
		getModalContainer.style.top = 0;
		holdProductName.textContent = premiumName;
	})
}




for (product of galleryProducts) {
	product.addEventListener('click', function() {
		var productName = 'Avon ' + this.getAttribute('name');
		//console.log('product clicked');
		//console.log(this.id, typeof(this.id));
		var linkImage = document.getElementById(this.id);
		console.log(linkImage);
		expandProductModal.style.display = 'flex';
		getSelectedProduct.src = './images/cream'+this.id+'.jpg';
		getModalOverlay.style.top = 0;
		getModalContainer.style.top = 0;
		holdProductName.textContent = productName;

		//get  clicked product
		var productID = this.getAttribute('id');
		var clickedObject = products.filter(product => {
			return product.id === productID;
		})
		console.log(clickedObject[0].description);
		// add description to modal
		var productDescription = clickedObject[0].description;
		getProductDescription.textContent = productDescription;

		// add details to modal
		var productDetails = clickedObject[0].details;
		getProductDetails.textContent = productDetails;
		console.log(productDetails)
	})
}
// function Product(id, name, price, description, details) {
// 	this.id = id;
// 	this.name = name;
// 	this.price = price;
// 	this.details = details;
// }

// let anew = new Product(
// 	'0001',
// 	'Anew Vitamin C Glow Set',
// 	23,280,
// 	'Combine this Triple System and enjoy maximum Results of Radiance and Youthful Glow on your Face.',
// 	'Can be bought as a Combo or individually. Suitable for All Skin Types'
// 	);

// console.log(anew.details);
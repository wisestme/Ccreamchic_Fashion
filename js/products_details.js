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
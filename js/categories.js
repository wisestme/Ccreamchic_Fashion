//Get all categories
let categories = document.querySelectorAll(".category");

// Display selected categories
for(category of categories) {
	// add event listener to all categories
	category.addEventListener('click', function displayCategory() {
		console.log(this.children[1].textContent.toLowerCase());

		// get clicked category
		let clickedCategory = this.children[1].textContent.toLowerCase();
		console.log(clickedCategory);

		// Get gallery  all products
		let galleryProducts = document.querySelectorAll('.gallery_product');
		// hide all gallery products
		for (product of galleryProducts) {
			product.classList.add('hide');
		}

		// display matching products
		let selectedProducts = document.querySelectorAll('.' + clickedCategory);
			console.log(selectedProducts);
			for(selectedProduct of selectedProducts){
				console.log(selectedProduct)
				selectedProduct.classList.remove('hide');
			}

	});
}
const categoryButtons = document.querySelectorAll('.category-btn button');
const products = document.querySelectorAll('.product');

function filterProducts(category) {
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
        product.style.display = '';
    } else {
        product.style.display = 'none';
    }
  });
}

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    filterProducts(category);
  });
});

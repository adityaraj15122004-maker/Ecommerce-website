let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart function
function addToCart(name, price, image) {

    const product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart!");
}

// Update cart count on page load
document.getElementById("cart-count").innerText = cart.length;


// CATEGORY underline functionality
const categories = document.querySelectorAll('.category');
const underline = document.querySelector('.category-bar .underline');

function moveUnderline(category) {
    underline.style.width = category.offsetWidth + 'px';
    underline.style.left = category.offsetLeft + 'px';
}

if (categories.length > 3) {
    categories[3].classList.add('selected');
    moveUnderline(categories[3]);
}

categories.forEach((category, index) => {
    category.addEventListener('click', () => {
        categories.forEach(cat => {
            cat.classList.remove('selected');
            cat.classList.remove('selected-7');
        });

        if (index === 6) {
            category.classList.add('selected-7');
        } else {
            category.classList.add('selected');
        }

        moveUnderline(category);
    });
});

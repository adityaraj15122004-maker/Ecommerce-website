let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cart-count").innerText = cart;
    alert("Item added to cart!");
}

// Sliding underline + selected color functionality
const categories = document.querySelectorAll('.category');
const underline = document.querySelector('.category-bar .underline');

function moveUnderline(category) {
    underline.style.width = category.offsetWidth + 'px';
    underline.style.left = category.offsetLeft + 'px';
}

// Initially select the first category
if (categories.length > 3) {
    categories[3].classList.add('selected');
    moveUnderline(categories[3]);
}

// Sliding underline + color for categories
categories.forEach((category, index) => {
    category.addEventListener('click', () => {
        // Remove all previous selected classes
        categories.forEach(cat => {
            cat.classList.remove('selected');
            cat.classList.remove('selected-7');
        });

        // Apply color
        if (index === 6) {
            category.classList.add('selected-7'); // 7th category blue
        } else {
            category.classList.add('selected'); // others golden
        }

        // Move the underline
        moveUnderline(category);
    });
});

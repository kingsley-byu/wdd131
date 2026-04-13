const menuBtn = document.querySelector('#menu-btn');
const mainNav = document.querySelector('#main-nav');

menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

 const year = document.querySelector("#currentYear");
 if (year) {
    year.textContent= new Date().getFullYear();
 }
 const modified = document.querySelector("#lastModified");
 if (modified){
    modified.textContent= `Last Modified: ${document.lastModified}`;
 }

 // ── CART FUNCTIONALITY ──

// Load cart from localStorage or start with empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Loop through each button and listen for clicks
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Get item name and price from data attributes
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            // If item exists increase quantity by 1
            existingItem.quantity += 1;
        } else {
            // If item is new push it into cart array
            cart.push({ name, price, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Give user feedback
        button.textContent = '✔ Added!';
        button.style.backgroundColor = 'green';

        // Reset button text after 2 seconds
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 2000);
    });
});

// ── DISPLAY CART ON ORDER PAGE ──

const cartItemsContainer = document.querySelector('#cart-items');
const cartTotalDisplay = document.querySelector('#cart-total');
const emptyCartMessage = document.querySelector('#empty-cart-message');

function displayCart() {
    // Only run on order page
    if (!cartItemsContainer) return;

    // If cart is empty show message
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        cartTotalDisplay.textContent = '$0.00';
        return;
    }

    // Hide empty message if cart has items
    emptyCartMessage.style.display = 'none';

    // Build cart items HTML using template literals
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span class="cart-item-name">${item.name} x${item.quantity}</span>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="cart-item-remove" data-name="${item.name}">✕</button>
        </div>
    `).join('');

    // Calculate and display total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalDisplay.textContent = `$${total.toFixed(2)}`;

    // Listen for remove buttons
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove item from cart array
            cart = cart.filter(item => item.name !== btn.dataset.name);
            // Save updated cart
            localStorage.setItem('cart', JSON.stringify(cart));
            // Refresh display
            displayCart();
        });
    });
}

// Run display cart on page load
displayCart();


// ── CLEAR CART ──
const clearCartBtn = document.querySelector('#clear-cart-btn');

if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    });
}

// ── ORDER FORM ──

const orderForm = document.querySelector('#order-form');
const orderConfirmation = document.querySelector('#order-confirmation');
const confirmationName = document.querySelector('#confirmation-name');
const confirmationTotal = document.querySelector('#confirmation-total');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        // Stop page from refreshing
        e.preventDefault();

        // Check cart is not empty before submitting
        if (cart.length === 0) {
            alert('Your cart is empty! Please add items before placing an order.');
            return;
        }

        // Get form values
        const fullname = document.querySelector('#fullname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const address = document.querySelector('#address').value.trim();
        const deliveryMethod = document.querySelector('#delivery-method').value;
        const payment = document.querySelector('#payment').value;

        // Validate phone number - must be at least 7 digits
        const phoneRegex = /^\d{7,}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Please enter a valid phone number with at least 7 digits.');
            return;
        }

        // Calculate final total
        const total = cart.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0);

        // Show confirmation message using template literals
        confirmationName.textContent = `Name: ${fullname}`;
        confirmationTotal.textContent = `Order Total: $${total.toFixed(2)}`;

        // Hide form and show confirmation
        orderForm.closest('section').style.display = 'none';
        orderConfirmation.classList.remove('hidden');

        // Clear cart after successful order
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));

        // Scroll to confirmation
        orderConfirmation.scrollIntoView({ behavior: 'smooth' });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { id: 1, name: 'Ensalada Verde Energética', price: 12.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { id: 2, name: 'Bowl de Quinoa y Aguacate', price: 14.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80' },
        { id: 3, name: 'Wrap de Verduras Asadas', price: 10.99, image: 'https://th.bing.com/th/id/OIP.GCykYpyyMumdxkoZInPNYQHaFj?w=281&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 4, name: 'Smoothie Bowl de Açaí', price: 9.99, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    ];

    const instagramImages = [
        'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ];

    const cart = [];

    // Renderizar elementos del menú
    const menuGrid = document.querySelector('.menu-grid');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="addToCart(${item.id})">Añadir al Carrito</button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Renderizar imágenes de Instagram
    const instagramGrid = document.querySelector('.instagram-grid');
    instagramImages.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'instagram-item';
        imgContainer.innerHTML = `<img src="${image}" alt="Instagram post">`;
        instagramGrid.appendChild(imgContainer);
    });

    // Funcionalidad del carrito
    window.addToCart = function(id) {
        const item = menuItems.find(item => item.id === id);
        cart.push(item);
        updateCart();
    };

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');

        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        cartCount.textContent = cart.length;
    }

    // Toggle del carrito
    const cartButton = document.getElementById('cart-button');
    const cartElement = document.getElementById('cart');

    cartButton.addEventListener('click', () => {
        cartElement.classList.toggle('open');
    });

    // Checkout
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        alert('¡Gracias por tu pedido!');
        cart.length = 0;
        updateCart();
        cartElement.classList.remove('open');
    });
});
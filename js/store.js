/* ============================================
   DECKED - Store (localStorage)
   Cart, users, orders, session, stock overrides
   ============================================ */


/* ---------- Cart ---------- */

function getCart() {
    try {
        var raw = localStorage.getItem('decked_cart');
        var cart = raw ? JSON.parse(raw) : [];
        return Array.isArray(cart) ? cart : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem('decked_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartCount();
}

function addToCart(productId) {
    var cart = getCart();
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) { existing = cart[i]; break; }
    }
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart(cart);
}

function changeCartQty(productId, delta) {
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            cart[i].qty = Math.max(1, cart[i].qty + delta);
            break;
        }
    }
    saveCart(cart);
}

function removeFromCart(productId) {
    var cart = getCart().filter(function (item) {
        return item.id !== productId;
    });
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

function cartCount() {
    return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function cartSubtotal() {
    return getCart().reduce(function (sum, item) {
        var p = findProduct(item.id);
        return p ? sum + p.price * item.qty : sum;
    }, 0);
}


/* ---------- User / session ---------- */

function getUser() {
    try {
        var raw = localStorage.getItem('decked_user');
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function saveUser(user) {
    try {
        localStorage.setItem('decked_user', JSON.stringify(user));
    } catch (e) {}
}

function clearUser() {
    localStorage.removeItem('decked_user');
}

function isLoggedIn() {
    return !!getUser();
}


/* ---------- Orders ---------- */

function getOrders() {
    try {
        var raw = localStorage.getItem('decked_orders');
        var orders = raw ? JSON.parse(raw) : [];
        return Array.isArray(orders) ? orders : [];
    } catch (e) {
        return [];
    }
}

function saveOrders(orders) {
    try {
        localStorage.setItem('decked_orders', JSON.stringify(orders));
    } catch (e) {}
}

function placeOrder() {
    var cart = getCart();
    if (cart.length === 0) return null;

    var subtotal = cartSubtotal();
    var shipping = subtotal >= 75 ? 0 : 5;
    var total = subtotal + shipping;

    var items = cart.map(function (ci) {
        var p = findProduct(ci.id);
        return {
            id:    ci.id,
            name:  p ? p.name : ci.id,
            qty:   ci.qty,
            price: p ? p.price : 0,
            img:   p ? productImage(p) : ''
        };
    });

    var order = {
        number: 'DKD-' + Math.floor(100000 + Math.random() * 899999),
        date:   new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        items:  items,
        total:  total
    };

    var orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();

    return order;
}


/* ---------- Stock overrides (demo) ---------- */

function getStockOverrides() {
    try {
        var raw = localStorage.getItem('decked_stock');
        var obj = raw ? JSON.parse(raw) : {};
        return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) {
        return {};
    }
}

function setStockOverride(productId, value) {
    var overrides = getStockOverrides();
    overrides[productId] = value;
    try {
        localStorage.setItem('decked_stock', JSON.stringify(overrides));
    } catch (e) {}
}


/* ---------- Cart count badge ---------- */

function updateCartCount() {
    var count = cartCount();
    var badges = document.querySelectorAll('.js-cart-count');
    for (var i = 0; i < badges.length; i++) {
        badges[i].textContent = String(count);
    }
}

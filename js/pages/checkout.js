document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('checkoutPage');

    if (!isLoggedIn()) {
        window.location.href = 'login.html?next=' + encodeURIComponent('checkout.html');
        return;
    }

    var cart = getCart();

    if (cart.length === 0) {
        container.innerHTML =
            '<div class="checkout-empty">' +
                '<img src="assets/decked-wheel.png" alt="">' +
                '<div class="checkout-empty-title">Nothing in your cart yet.</div>' +
                '<div class="checkout-empty-sub">Add a few things before heading out.</div>' +
                '<a href="shop.html" class="btn-primary" style="font-size:14px;padding:13px 28px;">Start shopping</a>' +
            '</div>';
        return;
    }

    var subtotal = cartSubtotal();
    var shipping = subtotal >= 75 ? 0 : 5;
    var total = subtotal + shipping;

    var html = '';
    html += '<a href="shop.html" class="btn-back">Back to the shop</a>';
    html += '<h1 class="checkout-title">Checkout</h1>';
    html += '<div class="checkout-layout">';

    html += '<form class="checkout-form" id="checkoutForm">';
    html += '<div class="checkout-form-title">Payment details</div>';
    html += '<label class="auth-field"><span class="auth-field-label">Cardholder name</span><input name="cardname" type="text" value="Jordan Vega" readonly autocomplete="off"></label>';
    html += '<label class="auth-field"><span class="auth-field-label">Card number</span><input name="cardnum" type="text" value="4242 4242 4242 4242" readonly autocomplete="off"></label>';
    html += '<div class="checkout-field-row">';
    html += '<label class="auth-field"><span class="auth-field-label">Expiry</span><input name="exp" type="text" value="08 / 28" readonly autocomplete="off"></label>';
    html += '<label class="auth-field"><span class="auth-field-label">CVC</span><input name="cvc" type="text" value="123" readonly autocomplete="off"></label>';
    html += '</div>';
    html += '<button type="submit" class="checkout-pay">Pay \u20AC' + total + '</button>';
    html += '<div class="checkout-demo-note">Demo checkout. The card details are sample values and no payment is processed.</div>';
    html += '</form>';

    html += '<div class="checkout-summary">';
    html += '<div class="checkout-summary-title">Order summary</div>';
    html += '<div>';
    cart.forEach(function (ci) {
        var p = findProduct(ci.id);
        if (!p) return;
        html += '<div class="checkout-summary-item">';
        html += '<img src="' + productImage(p) + '" alt="">';
        html += '<div class="checkout-summary-item-info"><div class="checkout-summary-item-name">' + p.name + '</div><div class="checkout-summary-item-qty">Qty ' + ci.qty + '</div></div>';
        html += '<div class="checkout-summary-item-price">\u20AC' + (p.price * ci.qty) + '</div>';
        html += '</div>';
    });
    html += '</div>';
    html += '<div class="checkout-totals">';
    html += '<div class="checkout-totals-row"><span>Subtotal</span><span>\u20AC' + subtotal + '</span></div>';
    html += '<div class="checkout-totals-row"><span>Shipping</span><span>' + (shipping === 0 ? 'Free' : '\u20AC' + shipping) + '</span></div>';
    html += '<div class="checkout-totals-final"><span>Total</span><span>\u20AC' + total + '</span></div>';
    html += '</div>';
    html += '</div>';

    html += '</div>'; /* end layout */
    container.innerHTML = html;

    document.getElementById('checkoutForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var order = placeOrder();
        if (!order) return;

        var user = getUser();
        var emailDisplay = user ? user.email : 'your inbox';

        container.innerHTML =
            '<div class="order-confirmed">' +
                '<div class="order-confirmed-icon">\u2713</div>' +
                '<h1>Order placed.</h1>' +
                '<p>Order ' + escapeHtml(order.number) + ' is all set for \u20AC' + order.total + '. We sent a receipt to ' + escapeHtml(emailDisplay) + '. See you on the boardwalk.</p>' +
                '<div class="order-confirmed-actions">' +
                    '<a href="account.html" class="btn-primary" style="font-size:14px;padding:13px 26px;">View orders</a>' +
                    '<a href="shop.html" class="btn-outline" style="padding:13px 26px;">Keep shopping</a>' +
                '</div>' +
            '</div>';

        updateCartCount();
    });
});

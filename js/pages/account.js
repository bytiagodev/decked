document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('accountPage');
    var user = getUser();

    if (!user) {
        container.innerHTML =
            '<div class="logged-out-state">' +
                '<img src="assets/decked-wheel-sm.webp" alt="">' +
                '<div class="logged-out-title">You’re not signed in.</div>' +
                '<div class="logged-out-sub">Orders and cart stay for next time.</div>' +
                '<a href="login.html?next=account.html" class="btn-primary btn-primary--sm">Log in</a>' +
            '</div>';
        return;
    }

    var firstName = user.name ? user.name.split(' ')[0] : 'Skater';
    var orders = getOrders();

    var html = '';
    html += '<span class="section-label section-label--muted">// Account</span>';
    html += '<div class="account-header">';
    html += '<div>';
    html += '<h1 class="account-name">Back on the board, ' + escapeHtml(firstName) + '.</h1>';
    html += '<div class="account-email">' + escapeHtml(user.email) + '</div>';
    html += '</div>';
    html += '<button type="button" class="btn-outline js-logout">Log out</button>';
    html += '</div>';

    html += '<h2 class="account-orders-heading">Order history</h2>';

    if (orders.length > 0) {
        html += '<div class="order-list">';
        orders.forEach(function (o) {
            var itemCount = o.items.reduce(function (sum, i) { return sum + i.qty; }, 0);
            html += '<div class="order-card">';
            html += '<div class="order-card-main">';
            html += '<div class="order-card-meta">' + escapeHtml(o.number) + ' &middot; ' + escapeHtml(o.date) + '</div>';
            html += '<div class="order-card-status"><span class="navbar-user-dot"></span>Confirmed &middot; ' + itemCount + ' items</div>';
            html += '</div>';
            html += '<div class="order-card-thumbs">';
            o.items.slice(0, 4).forEach(function (it) {
                html += '<img src="' + escapeHtml(it.img || '') + '" alt="' + escapeHtml(it.name) + '" class="order-card-thumb">';
            });
            html += '</div>';
            html += '<div class="order-card-total">\u20AC' + o.total + '</div>';
            html += '</div>';
        });
        html += '</div>';
    } else {
        html += '<div class="no-orders">';
        html += '<div class="no-orders-title">No orders yet.</div>';
        html += '<div class="no-orders-sub">Your rides will show up here once you check out.</div>';
        html += '<a href="shop.html" class="btn-primary btn-primary--sm">Start shopping</a>';
        html += '</div>';
    }

    container.innerHTML = html;

    var logoutBtn = container.querySelector('.js-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            clearUser();
            window.location.href = 'index.html';
        });
    }
});

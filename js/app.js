/* ============================================
   DECKED - App (shared across all pages)
   Navbar, cart drawer, mobile menu, reveals
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initNavbarAuth();
    initCartDrawer();
    initMobileMenu();
    initReveals();
    initNewsletter();
    updateCartCount();
});


/* ---------- Navbar auth state ---------- */

function initNavbarAuth() {
    var user = getUser();
    var guestEls = document.querySelectorAll('.js-guest-only');
    var authEls  = document.querySelectorAll('.js-auth-only');
    var nameEls  = document.querySelectorAll('.js-user-name');

    for (var i = 0; i < guestEls.length; i++) {
        guestEls[i].style.display = user ? 'none' : '';
    }
    for (var i = 0; i < authEls.length; i++) {
        authEls[i].style.display = user ? '' : 'none';
    }
    if (user) {
        var firstName = user.name ? user.name.split(' ')[0] : 'Account';
        for (var i = 0; i < nameEls.length; i++) {
            nameEls[i].textContent = firstName;
        }
    }

    /* Logout buttons */
    var logoutBtns = document.querySelectorAll('.js-logout');
    for (var i = 0; i < logoutBtns.length; i++) {
        logoutBtns[i].addEventListener('click', function (e) {
            e.preventDefault();
            clearUser();
            window.location.href = 'index.html';
        });
    }
}


/* ---------- Cart drawer ---------- */

function initCartDrawer() {
    var drawer   = document.getElementById('cartDrawer');
    var backdrop = document.getElementById('cartBackdrop');
    if (!drawer) return;

    /* Open buttons */
    var openBtns = document.querySelectorAll('.js-open-cart');
    for (var i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', function (e) {
            e.preventDefault();
            openCartDrawer();
        });
    }

    /* Close */
    var closeBtns = document.querySelectorAll('.js-close-cart');
    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', function () {
            closeCartDrawer();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', function () {
            closeCartDrawer();
        });
    }

    renderCartDrawer();
}

function openCartDrawer() {
    var drawer   = document.getElementById('cartDrawer');
    var backdrop = document.getElementById('cartBackdrop');
    if (drawer)   drawer.classList.add('is-open');
    if (backdrop) backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
    renderCartDrawer();

    /* Close mobile menu if open */
    var menu = document.getElementById('mobileMenu');
    if (menu) menu.style.display = 'none';
}

function closeCartDrawer() {
    var drawer   = document.getElementById('cartDrawer');
    var backdrop = document.getElementById('cartBackdrop');
    if (drawer)   drawer.classList.remove('is-open');
    if (backdrop) backdrop.style.display = 'none';
    document.body.style.overflow = '';
}

function renderCartDrawer() {
    var listEl    = document.getElementById('cartDrawerItems');
    var footerEl  = document.getElementById('cartDrawerFooter');
    var emptyEl   = document.getElementById('cartDrawerEmpty');
    if (!listEl) return;

    var cart = getCart();

    if (cart.length === 0) {
        listEl.style.display   = 'none';
        footerEl.style.display = 'none';
        emptyEl.style.display  = 'flex';
        return;
    }

    listEl.style.display   = 'block';
    footerEl.style.display = 'block';
    emptyEl.style.display  = 'none';

    var html = '';
    cart.forEach(function (ci) {
        var p = findProduct(ci.id);
        if (!p) return;
        var lineTotal = p.price * ci.qty;
        html +=
            '<div class="cart-drawer-item">' +
                '<img src="' + productImage(p) + '" alt="' + p.name + '">' +
                '<div class="cart-drawer-item-info">' +
                    '<div class="cart-drawer-item-top">' +
                        '<span class="cart-drawer-item-name">' + p.name + '</span>' +
                        '<span class="cart-drawer-item-line">\u20AC' + lineTotal + '</span>' +
                    '</div>' +
                    '<div class="cart-drawer-item-controls">' +
                        '<div class="qty-control">' +
                            '<button type="button" data-qty-dec="' + p.id + '">\u2212</button>' +
                            '<span>' + ci.qty + '</span>' +
                            '<button type="button" data-qty-inc="' + p.id + '">+</button>' +
                        '</div>' +
                        '<button type="button" class="cart-remove-btn" data-remove="' + p.id + '">Remove</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
    });
    listEl.innerHTML = html;

    /* Subtotal */
    var subtotal = cartSubtotal();
    var subtotalEl = document.getElementById('cartSubtotalValue');
    if (subtotalEl) subtotalEl.textContent = '\u20AC' + subtotal;

    /* Bind qty/remove buttons (once via delegation) */
    if (!listEl._bound) {
        listEl._bound = true;
        listEl.addEventListener('click', handleCartItemClick);
    }
}

function handleCartItemClick(e) {
    var btn = e.target.closest('button');
    if (!btn) return;

    var incId = btn.getAttribute('data-qty-inc');
    var decId = btn.getAttribute('data-qty-dec');
    var remId = btn.getAttribute('data-remove');

    if (incId) { changeCartQty(incId, 1);  renderCartDrawer(); }
    if (decId) { changeCartQty(decId, -1); renderCartDrawer(); }
    if (remId) { removeFromCart(remId);     renderCartDrawer(); }
}


/* ---------- Mobile menu ---------- */

function initMobileMenu() {
    var toggleBtn = document.getElementById('menuToggle');
    var menu      = document.getElementById('mobileMenu');
    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', function () {
        var isOpen = menu.style.display === 'flex';
        menu.style.display = isOpen ? 'none' : 'flex';
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    /* Close menu on link click */
    var links = menu.querySelectorAll('a, button');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            menu.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
}


/* ---------- Scroll reveals ---------- */

function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (els.length === 0) return;

    function check() {
        var vh = window.innerHeight || document.documentElement.clientHeight || 800;
        for (var i = 0; i < els.length; i++) {
            if (els[i].classList.contains('is-visible')) continue;
            var r = els[i].getBoundingClientRect();
            if (r.top < vh * 0.92 && r.bottom > -40) {
                els[i].classList.add('is-visible');
            }
        }
    }

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });

    /* Initial check */
    requestAnimationFrame(check);

    /* Failsafe: reveal everything after 2.5s */
    setTimeout(function () {
        for (var i = 0; i < els.length; i++) {
            els[i].classList.add('is-visible');
        }
    }, 2500);
}


/* ---------- Newsletter ---------- */

function initNewsletter() {
    var form = document.getElementById('newsletterForm');
    var done = document.getElementById('newsletterDone');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.style.display = 'none';
        if (done) done.style.display = 'block';
    });
}


/* ---------- Product card builder ---------- */

function buildProductCard(product) {
    var st   = effectiveStock(product);
    var out  = st === 'out';
    var low  = st === 'low';
    var img  = productImage(product);

    var card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    /* Click to view product */
    card.addEventListener('click', function () {
        window.location.href = 'product.html?id=' + product.id;
    });

    var html = '<div class="product-card-img">';
    html += '<img src="' + img + '" alt="' + product.name + '" loading="lazy">';

    /* Sold out overlay */
    if (out) {
        html += '<span class="product-card-soldout-overlay"><span class="product-card-soldout-label">Sold out</span></span>';
    }

    /* Tag badge */
    if (product.tag) {
        html += '<span class="product-card-tag" style="color:' + tagTextColor(product.tag) + ';background:' + tagColor(product.tag) + ';">' + product.tag + '</span>';
    }

    /* Add button */
    if (!out) {
        html += '<button type="button" class="product-card-add" data-add-id="' + product.id + '">+ Add</button>';
    }

    html += '</div>';

    /* Info */
    html += '<div class="product-card-info">';
    html += '<span class="product-card-category">' + product.cat + '</span>';
    html += '<div class="product-card-row">';
    html += '<span class="product-card-name">' + product.name + '</span>';
    html += '<span class="product-card-price">\u20AC' + product.price + '</span>';
    html += '</div>';

    if (low) {
        html += '<span class="product-card-low"><span class="product-card-low-dot"></span>Only a few left</span>';
    }

    html += '</div>';
    card.innerHTML = html;

    /* Add to cart click (stop propagation so it doesn't navigate) */
    var addBtn = card.querySelector('.product-card-add');
    if (addBtn) {
        addBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            addToCart(product.id);
            openCartDrawer();
        });
    }

    return card;
}

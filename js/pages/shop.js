document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var currentCat = params.get('cat') || 'All';
    if (CATEGORIES.indexOf(currentCat) === -1) currentCat = 'All';

    renderShop(currentCat);

    function renderShop(cat) {
        currentCat = cat;

        var title = cat === 'All' ? 'Shop everything' : cat;
        document.getElementById('shopTitle').textContent = title;
        document.getElementById('shopBreadcrumb').textContent = '// Shop / ' + title;

        var visible = PRODUCTS.filter(function (p) {
            return cat === 'All' || p.cat === cat;
        });
        document.getElementById('shopCount').textContent = visible.length + ' products';

        var bannerEl = document.getElementById('shopBanner');
        bannerEl.innerHTML = '';
        if (cat === 'All') {
            bannerEl.innerHTML =
                '<div class="shop-hero-banner">' +
                    '<img src="assets/decked-wheel.webp" alt="" class="shop-hero-wheel">' +
                    '<div class="shop-hero-content">' +
                        '<span class="section-label section-label--teal">// The full range</span>' +
                        '<h2>Everything we make,<br>in one place.</h2>' +
                        '<p>Decks, trucks, wheels, hardware and apparel. All pressed, stitched and tested on the boardwalk.</p>' +
                    '</div>' +
                '</div>';
        } else if (CATEGORY_BANNERS[cat]) {
            bannerEl.innerHTML =
                '<div class="shop-category-banner">' +
                    '<img src="' + CATEGORY_BANNERS[cat] + '" alt="">' +
                    '<span class="shop-category-banner-overlay"></span>' +
                '</div>';
        }

        var pillsEl = document.getElementById('categoryPills');
        pillsEl.innerHTML = '';
        CATEGORIES.forEach(function (c) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'category-pill' + (c === cat ? ' is-active' : '');
            btn.textContent = c;
            btn.addEventListener('click', function () {
                renderShop(c);
                window.history.replaceState(null, '', c === 'All' ? 'shop.html' : 'shop.html?cat=' + encodeURIComponent(c));
            });
            pillsEl.appendChild(btn);
        });

        var grid = document.getElementById('productGrid');
        grid.innerHTML = '';
        visible.forEach(function (p) {
            grid.appendChild(buildProductCard(p));
        });
    }
});

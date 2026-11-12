document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    var product = productId ? findProduct(productId) : null;
    var container = document.getElementById('productDetail');

    if (!product) {
        container.innerHTML = '<a href="shop.html" class="btn-back">Back to the shop</a><div class="product-missing"><div class="product-missing-title">This one rolled away.</div><div class="product-missing-sub">We couldn\'t find that product.</div><a href="shop.html" class="btn-primary btn-primary--sm">Back to the shop</a></div>';
        return;
    }

    document.title = 'DECKED - ' + product.name;
    var meta = stockMeta(product);
    var out = isOutOfStock(product);
    var st = effectiveStock(product);
    var specs = specsFor(product);
    var blurb = blurbFor(product);

    var html = '<a href="shop.html" class="btn-back">Back to the shop</a>';
    html += '<div class="product-detail-layout">';

    html += '<div class="product-detail-image">';
    html += '<img src="' + productImage(product) + '" alt="' + product.name + '">';
    if (product.tag) {
        html += '<span class="product-card-tag product-card-tag--detail ' + tagClass(product.tag) + '">' + product.tag + '</span>';
    }
    html += '</div>';

    html += '<div class="product-detail-info">';
    html += '<span class="product-detail-category">' + product.cat + '</span>';
    html += '<h1 class="product-detail-name">' + product.name + '</h1>';
    html += '<div class="product-detail-price-row">';
    html += '<div class="product-detail-price">\u20AC' + product.price + '</div>';
    html += '<span class="product-detail-stock product-detail-stock--' + meta.state + '"><span class="stock-dot"></span>' + meta.label + '</span>';
    html += '</div>';
    html += '<p class="product-detail-blurb">' + blurb + '</p>';

    html += '<div class="product-detail-actions">';
    if (!out) {
        html += '<button type="button" class="btn-primary btn-primary--shadow btn-primary--lg" id="addToCartBtn">Add to cart</button>';
    } else {
        html += '<span class="product-detail-soldout">Sold out</span>';
    }
    html += '<span class="product-detail-shipping">Free shipping over \u20AC75</span>';
    html += '</div>';

    html += '<div class="stock-toggle-row">';
    html += '<span class="stock-toggle-label">Demo &middot; Set stock</span>';
    html += '<div class="stock-toggle" id="stockToggle"></div>';
    html += '</div>';

    html += '<div class="product-specs">';
    html += '<span class="product-specs-title">Specs</span>';
    html += '<div class="product-specs-list">';
    specs.forEach(function (s) {
        html += '<div class="product-spec-row"><span class="product-spec-label">' + s[0] + '</span><span class="product-spec-value">' + s[1] + '</span></div>';
    });
    html += '</div></div>';
    html += '</div>'; /* end info */
    html += '</div>'; /* end layout */

    var related = PRODUCTS.filter(function (p) { return p.cat === product.cat && p.id !== product.id; }).slice(0, 4);
    if (related.length > 0) {
        html += '<div class="related-section">';
        html += '<h2>Pairs well with</h2>';
        html += '<div class="related-grid" id="relatedGrid"></div>';
        html += '</div>';
    }

    container.innerHTML = html;

    var addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
        addBtn.addEventListener('click', function () {
            addToCart(product.id);
            openCartDrawer();
        });
    }

    var toggleEl = document.getElementById('stockToggle');
    if (toggleEl) {
        var options = [['in', 'In stock'], ['low', 'Low'], ['out', 'Sold out']];
        options.forEach(function (o) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'stock-toggle-btn' + (st === o[0] ? ' is-active' : '');
            btn.textContent = o[1];
            btn.addEventListener('click', function () {
                setStockOverride(product.id, o[0]);
                window.location.reload();
            });
            toggleEl.appendChild(btn);
        });
    }

    var relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid) {
        related.forEach(function (p) {
            relatedGrid.appendChild(buildProductCard(p));
        });
    }
});

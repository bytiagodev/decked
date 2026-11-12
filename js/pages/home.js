document.addEventListener('DOMContentLoaded', function () {
    var scroll = document.getElementById('featuredScroll');
    FEATURED_IDS.forEach(function (id) {
        var product = findProduct(id);
        if (!product) return;
        var wrapper = document.createElement('div');
        wrapper.className = 'featured-scroll-item';
        wrapper.appendChild(buildProductCard(product));
        scroll.appendChild(wrapper);
    });
});

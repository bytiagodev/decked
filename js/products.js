/* ============================================
   DECKED - Product Catalogue
   42 products across 6 categories
   ============================================ */

var PRODUCTS = [
    /* -- Decks (8) -- */
    { id: 'decks-classic-black',     name: 'Classic Black',           cat: 'Decks',       price: 59,  tag: 'Sale', stock: 'low' },
    { id: 'decks-raw-maple',         name: 'Raw Maple',              cat: 'Decks',       price: 55 },
    { id: 'decks-concrete-jungle',   name: 'Concrete Jungle',        cat: 'Decks',       price: 65 },
    { id: 'decks-palm-line',         name: 'Palm Line',              cat: 'Decks',       price: 69 },
    { id: 'decks-seafoam-dream',     name: 'Seafoam Dream',          cat: 'Decks',       price: 65 },
    { id: 'decks-split-series',      name: 'Split Series',           cat: 'Decks',       price: 69 },
    { id: 'decks-sunset-fade',       name: 'Sunset Fade',            cat: 'Decks',       price: 72 },
    { id: 'decks-dusk-rider',        name: 'Dusk Rider',             cat: 'Decks',       price: 75,  tag: 'New' },

    /* -- Trucks (6) -- */
    { id: 'trucks-standard-raw',     name: 'Standard Raw',           cat: 'Trucks',      price: 45 },
    { id: 'trucks-matte-black',      name: 'Matte Black',            cat: 'Trucks',      price: 52 },
    { id: 'trucks-ghost-white',      name: 'Ghost White',            cat: 'Trucks',      price: 52 },
    { id: 'trucks-coral-pop',        name: 'Coral Pop',              cat: 'Trucks',      price: 55,  tag: 'New' },
    { id: 'trucks-seafoam-edition',  name: 'Seafoam Edition',        cat: 'Trucks',      price: 55 },
    { id: 'trucks-gold-standard',    name: 'Gold Standard',          cat: 'Trucks',      price: 60,  stock: 'low' },

    /* -- Wheels (6) -- */
    { id: 'wheels-classic-white-52mm', name: 'Classic White 52mm',   cat: 'Wheels',      price: 34,  tag: 'Sale', stock: 'out' },
    { id: 'wheels-street-52mm',      name: 'Street 52mm',            cat: 'Wheels',      price: 36 },
    { id: 'wheels-midnight-53mm',    name: 'Midnight 53mm',          cat: 'Wheels',      price: 36 },
    { id: 'wheels-park-54mm',        name: 'Park 54mm',              cat: 'Wheels',      price: 38 },
    { id: 'wheels-swirl-54mm',       name: 'Swirl 54mm',             cat: 'Wheels',      price: 42,  tag: 'New' },
    { id: 'wheels-cruiser-56mm',     name: 'Cruiser 56mm',           cat: 'Wheels',      price: 45,  stock: 'low' },

    /* -- Hardware (6) -- */
    { id: 'hardware-bolt-set-black', name: 'Bolt Set / Black',       cat: 'Hardware',    price: 9 },
    { id: 'hardware-bolt-set-gold',  name: 'Bolt Set / Gold',        cat: 'Hardware',    price: 12 },
    { id: 'hardware-riser-pads-1-8', name: 'Riser Pads 1/8"',       cat: 'Hardware',    price: 8 },
    { id: 'hardware-riser-pads-1-4', name: 'Riser Pads 1/4"',       cat: 'Hardware',    price: 8 },
    { id: 'hardware-skate-tool-black', name: 'Skate Tool / Black',   cat: 'Hardware',    price: 22 },
    { id: 'hardware-skate-tool-red', name: 'Skate Tool / Red',       cat: 'Hardware',    price: 22 },

    /* -- Apparel (8) -- */
    { id: 'apparel-logo-tee-white',  name: 'Logo Tee / White',      cat: 'Apparel',     price: 32 },
    { id: 'apparel-logo-tee-black',  name: 'Logo Tee / Black',      cat: 'Apparel',     price: 32 },
    { id: 'apparel-sunset-stripe-tee', name: 'Sunset Stripe Tee',   cat: 'Apparel',     price: 36,  tag: 'New' },
    { id: 'apparel-trucker-cap-black', name: 'Trucker Cap / Black',  cat: 'Apparel',     price: 28 },
    { id: 'apparel-trucker-cap-coral', name: 'Trucker Cap / Coral',  cat: 'Apparel',     price: 28 },
    { id: 'apparel-classic-hoodie-sand', name: 'Classic Hoodie / Sand', cat: 'Apparel',  price: 68 },
    { id: 'apparel-classic-hoodie-black', name: 'Classic Hoodie / Black', cat: 'Apparel', price: 68, stock: 'out' },
    { id: 'apparel-skate-club-hoodie', name: 'Skate Club Hoodie',   cat: 'Apparel',     price: 72,  tag: 'New', stock: 'low' },

    /* -- Accessories (8) -- */
    { id: 'accessories-curb-wax-original', name: 'Curb Wax / Original', cat: 'Accessories', price: 7 },
    { id: 'accessories-curb-wax-tropical', name: 'Curb Wax / Tropical', cat: 'Accessories', price: 7 },
    { id: 'accessories-sticker-pack',      name: 'Sticker Pack',        cat: 'Accessories', price: 5 },
    { id: 'accessories-skate-socks-3-pack', name: 'Skate Socks / 3-Pack', cat: 'Accessories', price: 18 },
    { id: 'accessories-water-bottle',      name: 'Water Bottle',        cat: 'Accessories', price: 26 },
    { id: 'accessories-hip-pack-coral',    name: 'Hip Pack / Coral',    cat: 'Accessories', price: 38, tag: 'New', stock: 'low' },
    { id: 'accessories-skate-backpack-sand', name: 'Skate Backpack / Sand', cat: 'Accessories', price: 52 },
    { id: 'accessories-skate-backpack-black', name: 'Skate Backpack / Black', cat: 'Accessories', price: 52 }
];

var FEATURED_IDS = [
    'decks-dusk-rider',
    'trucks-coral-pop',
    'wheels-swirl-54mm',
    'apparel-skate-club-hoodie',
    'apparel-sunset-stripe-tee',
    'accessories-hip-pack-coral',
    'decks-sunset-fade',
    'wheels-cruiser-56mm'
];

var CATEGORIES = ['All', 'Decks', 'Trucks', 'Wheels', 'Hardware', 'Apparel', 'Accessories'];

var CATEGORY_BANNERS = {
    Decks:       'images/lifestyle/lifestyle-decks-banner.jpg',
    Apparel:     'images/lifestyle/lifestyle-apparel-banner.jpg',
    Wheels:      'images/lifestyle/wheels-banner.jpg',
    Trucks:      'images/lifestyle/lifestyle-wheels-trucks-banner.jpg',
    Hardware:    'images/lifestyle/hardware-banner.jpg',
    Accessories: 'images/lifestyle/lifestyle-accessories-banner.jpg'
};


/* ---------- Helpers ---------- */

function findProduct(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
}

function productImage(product) {
    return 'images/products/' + product.id + '.jpg';
}

function tagColor(tag) {
    if (tag === 'New')  return '#4ECDC4';
    if (tag === 'Sale') return '#E8614D';
    return '#F5A623';
}

function tagTextColor(tag) {
    if (tag === 'Sale') return '#FEFDF5';
    return '#2C2C28';
}

function effectiveStock(product) {
    var overrides = getStockOverrides();
    return overrides[product.id] || product.stock || 'in';
}

function isOutOfStock(product) {
    return effectiveStock(product) === 'out';
}

function stockMeta(product) {
    var st = effectiveStock(product);
    if (st === 'out') return { label: 'Sold out',       color: '#E8614D' };
    if (st === 'low') return { label: 'Only a few left', color: '#b07e0a' };
    return { label: 'In stock', color: '#2f9e94' };
}

function specsFor(product) {
    var mm = (product.name.match(/(\d+)mm/) || [])[1];
    switch (product.cat) {
        case 'Decks':    return [['Width','8.0"'],['Length','32"'],['Build','7-ply maple'],['Concave','Medium']];
        case 'Trucks':   return [['Axle','5.0"'],['Body','Forged aluminum'],['Bushings','92A'],['Sold as','Set of 2']];
        case 'Wheels':   return [['Diameter',(mm||'54')+'mm'],['Durometer','99A'],['Profile','Conical'],['Sold as','Set of 4']];
        case 'Hardware': return [['Material','Hardened steel'],['Finish','Powder-coat'],['Fit','Universal']];
        case 'Apparel':  return [['Fabric','Mid-weight cotton'],['Fit','Relaxed'],['Print','Water-based ink']];
        default:         return [['Made in','Venice, CA'],['Good for','Everyday carry']];
    }
}

function blurbFor(product) {
    switch (product.cat) {
        case 'Decks':    return 'Pressed from seven plies of Canadian maple for pop that lasts past August. Sealed, sanded and ready for grip.';
        case 'Trucks':   return 'Forged, light and built to grind. Buttery turn dialed in, ready to bolt on straight out of the box.';
        case 'Wheels':   return 'A smooth, fast urethane that holds its shape and its speed across rough Venice concrete.';
        case 'Hardware':  return 'The small stuff that keeps you rolling. Do it once, do it right, forget about it.';
        case 'Apparel':  return 'Built for golden afternoons and the slow roll home. Soft, heavyweight, and made to fade nicely.';
        default:         return 'A little extra for the daily ride. Designed and tested on the boardwalk.';
    }
}

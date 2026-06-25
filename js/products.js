var PRODUCTS = [
  /* -- Decks (8) -- */
  {
    id: "decks-classic-black",
    name: "Classic Black",
    cat: "Decks",
    price: 59,
    tag: "Sale",
    stock: "low",
  },
  { id: "decks-raw-maple", name: "Raw Maple", cat: "Decks", price: 55 },
  {
    id: "decks-concrete-jungle",
    name: "Concrete Jungle",
    cat: "Decks",
    price: 65,
  },
  { id: "decks-palm-line", name: "Palm Line", cat: "Decks", price: 69 },
  { id: "decks-seafoam-dream", name: "Seafoam Dream", cat: "Decks", price: 65 },
  { id: "decks-split-series", name: "Split Series", cat: "Decks", price: 69 },
  { id: "decks-sunset-fade", name: "Sunset Fade", cat: "Decks", price: 72 },
  {
    id: "decks-dusk-rider",
    name: "Dusk Rider",
    cat: "Decks",
    price: 75,
    tag: "New",
  },

  /* -- Trucks (6) -- */
  { id: "trucks-standard-raw", name: "Standard Raw", cat: "Trucks", price: 45 },
  { id: "trucks-matte-black", name: "Matte Black", cat: "Trucks", price: 52 },
  { id: "trucks-ghost-white", name: "Ghost White", cat: "Trucks", price: 52 },
  {
    id: "trucks-coral-pop",
    name: "Coral Pop",
    cat: "Trucks",
    price: 55,
    tag: "New",
  },
  {
    id: "trucks-seafoam-edition",
    name: "Seafoam Edition",
    cat: "Trucks",
    price: 55,
  },
  {
    id: "trucks-gold-standard",
    name: "Gold Standard",
    cat: "Trucks",
    price: 60,
    stock: "low",
  },

  /* -- Wheels (6) -- */
  {
    id: "wheels-classic-white-52mm",
    name: "Classic White 52mm",
    cat: "Wheels",
    price: 34,
    tag: "Sale",
    stock: "out",
  },
  { id: "wheels-street-52mm", name: "Street 52mm", cat: "Wheels", price: 36 },
  {
    id: "wheels-midnight-53mm",
    name: "Midnight 53mm",
    cat: "Wheels",
    price: 36,
  },
  { id: "wheels-park-54mm", name: "Park 54mm", cat: "Wheels", price: 38 },
  {
    id: "wheels-swirl-54mm",
    name: "Swirl 54mm",
    cat: "Wheels",
    price: 42,
    tag: "New",
  },
  {
    id: "wheels-cruiser-56mm",
    name: "Cruiser 56mm",
    cat: "Wheels",
    price: 45,
    stock: "low",
  },

  /* -- Hardware (6) -- */
  {
    id: "hardware-bolt-set-black",
    name: "Bolt Set / Black",
    cat: "Hardware",
    price: 9,
  },
  {
    id: "hardware-bolt-set-gold",
    name: "Bolt Set / Gold",
    cat: "Hardware",
    price: 12,
  },
  {
    id: "hardware-riser-pads-1-8",
    name: 'Riser Pads 1/8"',
    cat: "Hardware",
    price: 8,
  },
  {
    id: "hardware-riser-pads-1-4",
    name: 'Riser Pads 1/4"',
    cat: "Hardware",
    price: 8,
  },
  {
    id: "hardware-skate-tool-black",
    name: "Skate Tool / Black",
    cat: "Hardware",
    price: 22,
  },
  {
    id: "hardware-skate-tool-red",
    name: "Skate Tool / Red",
    cat: "Hardware",
    price: 22,
  },

  /* -- Apparel (8) -- */
  {
    id: "apparel-logo-tee-white",
    name: "Logo Tee / White",
    cat: "Apparel",
    price: 32,
  },
  {
    id: "apparel-logo-tee-black",
    name: "Logo Tee / Black",
    cat: "Apparel",
    price: 32,
  },
  {
    id: "apparel-sunset-stripe-tee",
    name: "Sunset Stripe Tee",
    cat: "Apparel",
    price: 36,
    tag: "New",
  },
  {
    id: "apparel-trucker-cap-black",
    name: "Trucker Cap / Black",
    cat: "Apparel",
    price: 28,
  },
  {
    id: "apparel-trucker-cap-coral",
    name: "Trucker Cap / Coral",
    cat: "Apparel",
    price: 28,
  },
  {
    id: "apparel-classic-hoodie-sand",
    name: "Classic Hoodie / Sand",
    cat: "Apparel",
    price: 68,
  },
  {
    id: "apparel-classic-hoodie-black",
    name: "Classic Hoodie / Black",
    cat: "Apparel",
    price: 68,
    stock: "out",
  },
  {
    id: "apparel-skate-club-hoodie",
    name: "Skate Club Hoodie",
    cat: "Apparel",
    price: 72,
    tag: "New",
    stock: "low",
  },

  /* -- Accessories (8) -- */
  {
    id: "accessories-curb-wax-original",
    name: "Curb Wax / Original",
    cat: "Accessories",
    price: 7,
  },
  {
    id: "accessories-curb-wax-tropical",
    name: "Curb Wax / Tropical",
    cat: "Accessories",
    price: 7,
  },
  {
    id: "accessories-sticker-pack",
    name: "Sticker Pack",
    cat: "Accessories",
    price: 5,
  },
  {
    id: "accessories-skate-socks-3-pack",
    name: "Skate Socks / 3-Pack",
    cat: "Accessories",
    price: 18,
  },
  {
    id: "accessories-water-bottle",
    name: "Water Bottle",
    cat: "Accessories",
    price: 26,
  },
  {
    id: "accessories-hip-pack-coral",
    name: "Hip Pack / Coral",
    cat: "Accessories",
    price: 38,
    tag: "New",
    stock: "low",
  },
  {
    id: "accessories-skate-backpack-sand",
    name: "Skate Backpack / Sand",
    cat: "Accessories",
    price: 52,
  },
  {
    id: "accessories-skate-backpack-black",
    name: "Skate Backpack / Black",
    cat: "Accessories",
    price: 52,
  },
];

var FEATURED_IDS = [
  "decks-dusk-rider",
  "trucks-coral-pop",
  "wheels-swirl-54mm",
  "apparel-skate-club-hoodie",
  "apparel-sunset-stripe-tee",
  "accessories-hip-pack-coral",
  "decks-sunset-fade",
  "wheels-cruiser-56mm",
];

var CATEGORIES = [
  "All",
  "Decks",
  "Trucks",
  "Wheels",
  "Hardware",
  "Apparel",
  "Accessories",
];

var CATEGORY_BANNERS = {
  Decks: "images/lifestyle/lifestyle-decks-banner.jpg",
  Apparel: "images/lifestyle/lifestyle-apparel-banner.jpg",
  Wheels: "images/lifestyle/wheels-banner.jpg",
  Trucks: "images/lifestyle/lifestyle-wheels-trucks-banner.jpg",
  Hardware: "images/lifestyle/hardware-banner.jpg",
  Accessories: "images/lifestyle/lifestyle-accessories-banner.jpg",
};

/* ---------- Helpers ---------- */

function findProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

function productImage(product) {
  return "images/products/" + product.id + ".jpg";
}

function tagColor(tag) {
  if (tag === "New") return "#4ECDC4";
  if (tag === "Sale") return "#E8614D";
  return "#F5A623";
}

function tagTextColor(tag) {
  if (tag === "Sale") return "#FEFDF5";
  return "#2C2C28";
}

function effectiveStock(product) {
  var overrides = getStockOverrides();
  return overrides[product.id] || product.stock || "in";
}

function isOutOfStock(product) {
  return effectiveStock(product) === "out";
}

function stockMeta(product) {
  var st = effectiveStock(product);
  if (st === "out") return { label: "Sold out", color: "#E8614D" };
  if (st === "low") return { label: "Only a few left", color: "#b07e0a" };
  return { label: "In stock", color: "#2f9e94" };
}

/* ---------- Per-product specs ---------- */

var SPECS = {
  /* Decks */
  "decks-classic-black": [
    ["Width", '8.0"'],
    ["Length", '31.875"'],
    ["Build", "7-ply maple"],
    ["Concave", "Medium"],
  ],
  "decks-raw-maple": [
    ["Width", '7.75"'],
    ["Length", '31.5"'],
    ["Build", "7-ply maple"],
    ["Concave", "Mellow"],
  ],
  "decks-concrete-jungle": [
    ["Width", '8.25"'],
    ["Length", '32.1"'],
    ["Build", "7-ply maple"],
    ["Concave", "Steep"],
  ],
  "decks-palm-line": [
    ["Width", '8.0"'],
    ["Length", '31.875"'],
    ["Build", "7-ply maple"],
    ["Concave", "Medium"],
  ],
  "decks-seafoam-dream": [
    ["Width", '7.875"'],
    ["Length", '31.7"'],
    ["Build", "7-ply maple"],
    ["Concave", "Mellow"],
  ],
  "decks-split-series": [
    ["Width", '8.125"'],
    ["Length", '32"'],
    ["Build", "7-ply maple"],
    ["Concave", "Medium"],
  ],
  "decks-sunset-fade": [
    ["Width", '8.0"'],
    ["Length", '31.875"'],
    ["Build", "7-ply maple"],
    ["Concave", "Medium"],
  ],
  "decks-dusk-rider": [
    ["Width", '8.25"'],
    ["Length", '32.2"'],
    ["Build", "7-ply maple"],
    ["Concave", "Steep"],
  ],

  /* Trucks */
  "trucks-standard-raw": [
    ["Axle", '5.0"'],
    ["Body", "Forged aluminum"],
    ["Bushings", "92A"],
    ["Sold as", "Set of 2"],
  ],
  "trucks-matte-black": [
    ["Axle", '5.0"'],
    ["Body", "Forged aluminum"],
    ["Bushings", "92A"],
    ["Sold as", "Set of 2"],
  ],
  "trucks-ghost-white": [
    ["Axle", '5.0"'],
    ["Body", "Forged aluminum"],
    ["Bushings", "90A"],
    ["Sold as", "Set of 2"],
  ],
  "trucks-coral-pop": [
    ["Axle", '5.25"'],
    ["Body", "Forged aluminum"],
    ["Bushings", "92A"],
    ["Sold as", "Set of 2"],
  ],
  "trucks-seafoam-edition": [
    ["Axle", '5.25"'],
    ["Body", "Forged aluminum"],
    ["Bushings", "90A"],
    ["Sold as", "Set of 2"],
  ],
  "trucks-gold-standard": [
    ["Axle", '5.0"'],
    ["Body", "Forged aluminum, gold plate"],
    ["Bushings", "94A"],
    ["Sold as", "Set of 2"],
  ],

  /* Wheels */
  "wheels-classic-white-52mm": [
    ["Diameter", "52mm"],
    ["Durometer", "99A"],
    ["Profile", "Conical"],
    ["Sold as", "Set of 4"],
  ],
  "wheels-street-52mm": [
    ["Diameter", "52mm"],
    ["Durometer", "99A"],
    ["Profile", "Conical"],
    ["Sold as", "Set of 4"],
  ],
  "wheels-midnight-53mm": [
    ["Diameter", "53mm"],
    ["Durometer", "99A"],
    ["Profile", "Conical"],
    ["Sold as", "Set of 4"],
  ],
  "wheels-park-54mm": [
    ["Diameter", "54mm"],
    ["Durometer", "99A"],
    ["Profile", "Conical"],
    ["Sold as", "Set of 4"],
  ],
  "wheels-swirl-54mm": [
    ["Diameter", "54mm"],
    ["Durometer", "99A"],
    ["Profile", "Conical"],
    ["Sold as", "Set of 4"],
  ],
  "wheels-cruiser-56mm": [
    ["Diameter", "56mm"],
    ["Durometer", "83A"],
    ["Profile", "Round"],
    ["Sold as", "Set of 4"],
  ],

  /* Hardware */
  "hardware-bolt-set-black": [
    ["Material", "Hardened steel"],
    ["Finish", "Black oxide"],
    ["Length", '1" (8-pack)'],
  ],
  "hardware-bolt-set-gold": [
    ["Material", "Hardened steel"],
    ["Finish", "Gold zinc"],
    ["Length", '1" (8-pack)'],
  ],
  "hardware-riser-pads-1-8": [
    ["Material", "Shock-absorbing rubber"],
    ["Thickness", '1/8"'],
    ["Fit", "Universal"],
  ],
  "hardware-riser-pads-1-4": [
    ["Material", "Shock-absorbing rubber"],
    ["Thickness", '1/4"'],
    ["Fit", "Universal"],
  ],
  "hardware-skate-tool-black": [
    ["Material", "CNC steel"],
    ["Fits", '3/8", 1/2", 9/16"'],
    ["Includes", "Bearing puller"],
  ],
  "hardware-skate-tool-red": [
    ["Material", "CNC steel"],
    ["Fits", '3/8", 1/2", 9/16"'],
    ["Includes", "Bearing puller"],
  ],

  /* Apparel */
  "apparel-logo-tee-white": [
    ["Fabric", "6oz cotton"],
    ["Fit", "Relaxed"],
    ["Print", "Water-based ink"],
  ],
  "apparel-logo-tee-black": [
    ["Fabric", "6oz cotton"],
    ["Fit", "Relaxed"],
    ["Print", "Water-based ink"],
  ],
  "apparel-sunset-stripe-tee": [
    ["Fabric", "6oz cotton"],
    ["Fit", "Relaxed"],
    ["Print", "Yarn-dyed stripe"],
  ],
  "apparel-trucker-cap-black": [
    ["Shell", "Cotton twill"],
    ["Back", "Mesh, snapback"],
    ["Fit", "Adjustable"],
  ],
  "apparel-trucker-cap-coral": [
    ["Shell", "Cotton twill"],
    ["Back", "Mesh, snapback"],
    ["Fit", "Adjustable"],
  ],
  "apparel-classic-hoodie-sand": [
    ["Fabric", "13oz fleece"],
    ["Fit", "Relaxed"],
    ["Detail", "Kangaroo pocket"],
  ],
  "apparel-classic-hoodie-black": [
    ["Fabric", "13oz fleece"],
    ["Fit", "Relaxed"],
    ["Detail", "Kangaroo pocket"],
  ],
  "apparel-skate-club-hoodie": [
    ["Fabric", "13oz fleece"],
    ["Fit", "Relaxed"],
    ["Detail", "Chest embroidery"],
  ],

  /* Accessories */
  "accessories-curb-wax-original": [
    ["Net weight", "2.5 oz"],
    ["Use", "Ledges and rails"],
  ],
  "accessories-curb-wax-tropical": [
    ["Net weight", "2.5 oz"],
    ["Use", "Ledges and rails"],
  ],
  "accessories-sticker-pack": [
    ["Count", "12 stickers"],
    ["Material", "Weatherproof vinyl"],
  ],
  "accessories-skate-socks-3-pack": [
    ["Fabric", "Combed cotton blend"],
    ["Count", "3 pairs"],
    ["Sizing", "One size fits most"],
  ],
  "accessories-water-bottle": [
    ["Capacity", "24 oz"],
    ["Material", "Stainless steel"],
    ["Insulation", "Double-wall"],
  ],
  "accessories-hip-pack-coral": [
    ["Capacity", "3L"],
    ["Strap", "Adjustable crossbody"],
    ["Closure", "Zip"],
  ],
  "accessories-skate-backpack-sand": [
    ["Capacity", "22L"],
    ["Carry", "Padded board straps"],
    ["Material", "Canvas"],
  ],
  "accessories-skate-backpack-black": [
    ["Capacity", "22L"],
    ["Carry", "Padded board straps"],
    ["Material", "Canvas"],
  ],
};

/* ---------- Per-product blurbs ---------- */

var BLURBS = {
  /* Decks */
  "decks-classic-black":
    "Matte black, one small mark near the tail, nothing else competing for attention. The deck for people who let the riding do the talking.",
  "decks-raw-maple":
    "No paint, no print, just sanded maple grain you can actually feel under your hand. Shows every scuff like a logbook.",
  "decks-concrete-jungle":
    "A steep concave and a grey texture print built for parking garages, loading docks and anywhere else the city gets rough.",
  "decks-palm-line":
    "Sandy gold with a single palm silhouette running the length of the board. Beach cruiser looks, skatepark concave underneath.",
  "decks-seafoam-dream":
    "A pale seafoam green with one quiet wave line tracing the deck. Calm to look at, mellow concave to match.",
  "decks-split-series":
    "Sky blue and coral meet on a hard diagonal, no gradient, no blending. Pick a lane or ride both.",
  "decks-sunset-fade":
    "Coral melts into sunset orange across the whole deck, the kind of colorway that looks best right as the light goes gold.",
  "decks-dusk-rider":
    "Deep purple bleeding into burnt orange, steep concave for locking in on transitions. Built for the last hour before dark.",

  /* Trucks */
  "trucks-standard-raw":
    "Bare aluminum, no finish to chip or fade. The no-frills set most riders start with and never feel the need to upgrade from.",
  "trucks-matte-black":
    "A flat black finish over forged aluminum, dialed to disappear scuffs instead of showing every scrape from day one.",
  "trucks-ghost-white":
    "Clean white powder-coat that stays sharp against any deck. Softer 90A bushings for a looser, more playful turn.",
  "trucks-coral-pop":
    'Coral red finish, wider 5.25" axle for stability under bigger boards. The set that matches the loud decks on purpose.',
  "trucks-seafoam-edition":
    'Seafoam finish over the wider 5.25" axle, softer bushings dialed in for cruising rather than tight tech turns.',
  "trucks-gold-standard":
    "Gold-plated hardware on a forged body, stiffer 94A bushings for riders who want zero slop in the turn.",

  /* Wheels */
  "wheels-classic-white-52mm":
    "Plain white, 52mm, 99A. No graphics, no colorway, just a reliable street wheel for riders who would rather spend on the deck.",
  "wheels-street-52mm":
    "A coral stripe on white, 52mm and 99A for tech tricks and ledge work where you want speed to wash out fast on landings.",
  "wheels-midnight-53mm":
    "Matte black, 53mm, 99A. Sits a hair bigger than the street wheels for a touch more roll speed without losing pop response.",
  "wheels-park-54mm":
    "Bright sunset orange, 54mm, built for transition and bowl riding where sustained speed matters more than instant grip.",
  "wheels-swirl-54mm":
    "Coral and white marbled together in a process that never repeats, so no two sets come out patterned exactly alike.",
  "wheels-cruiser-56mm":
    "Soft 83A urethane in seafoam, 56mm and round profile for rolling over cracked sidewalks and boardwalk seams without rattling your teeth.",

  /* Hardware */
  "hardware-bolt-set-black":
    "Black oxide bolts and nuts, eight per pack, enough for one full mount with spares left over for next time.",
  "hardware-bolt-set-gold":
    "Hardened steel bolts finished in gold zinc, eight per pack, for anyone who wants the small parts to match the loud setup.",
  "hardware-riser-pads-1-8":
    "Thin rubber risers that cut down on wheel bite without noticeably raising your ride height.",
  "hardware-riser-pads-1-4":
    "Thicker rubber risers for bigger wheels or deeper concave decks that need the extra clearance.",
  "hardware-skate-tool-black":
    "One T-shaped tool that handles every nut and bolt on the board plus the bearings, so the toolbox stays at home.",
  "hardware-skate-tool-red":
    "A T-shaped tool in red, built to handle every nut, bolt and bearing on the board so the rest of the toolbox stays at home.",

  /* Apparel */
  "apparel-logo-tee-white":
    "A plain white tee with a small circular logo on the chest. Built to be the thing you reach for without thinking.",
  "apparel-logo-tee-black":
    "A black tee with a small circular logo at the chest, sized for layering under a hoodie once the sun drops.",
  "apparel-sunset-stripe-tee":
    "Horizontal stripes in coral, orange and seafoam across a white base. The loudest tee in the lineup, on purpose.",
  "apparel-trucker-cap-black":
    "Black twill front, mesh back, snapback fit. Keeps the sun out without committing to a full brim hat.",
  "apparel-trucker-cap-coral":
    "A coral front panel over a mesh back, the loudest piece in the cap lineup and built to take a beating outdoors.",
  "apparel-classic-hoodie-sand":
    "A heavyweight sandy hoodie built to take a beating and only look better for it. Kangaroo pocket, no fuss.",
  "apparel-classic-hoodie-black":
    "A heavyweight black hoodie with a kangaroo pocket, built to take years of wear without showing much of it.",
  "apparel-skate-club-hoodie":
    "Seafoam green with a small embroidered chest graphic instead of a print. A step up from the classic hoodie for less, not more.",

  /* Accessories */
  "accessories-curb-wax-original":
    "A cream-colored wax block for keeping ledges and rails fast. Lasts through a full season of regular use.",
  "accessories-curb-wax-tropical":
    "A tropical orange wax block for keeping ledges and rails fast, color-coded so it never gets mixed up in a shared bag.",
  "accessories-sticker-pack":
    "Twelve assorted stickers from the catalogue graphics, weatherproof enough for a board, a bottle or a bumper.",
  "accessories-skate-socks-3-pack":
    "Three crew socks in coral, seafoam and black. Thick enough at the heel to actually matter inside skate shoes.",
  "accessories-water-bottle":
    "A matte black insulated bottle that keeps cold water cold through a full session, no condensation puddle in your bag.",
  "accessories-hip-pack-coral":
    "A coral crossbody pack sized for a phone, wallet and wax, worn across the body so it does not swing while you ride.",
  "accessories-skate-backpack-sand":
    "A canvas backpack with dedicated straps for carrying a board hands-free, sized for a full day out.",
  "accessories-skate-backpack-black":
    "A black canvas backpack with dedicated straps for carrying a board hands-free, built for a full day away from home.",
};

/* ---------- Updated helpers ---------- */

function specsFor(product) {
  return (
    SPECS[product.id] || [
      ["Made in", "Venice, CA"],
      ["Good for", "Everyday carry"],
    ]
  );
}

function blurbFor(product) {
  return (
    BLURBS[product.id] ||
    "A little extra for the daily ride. Designed and tested on the boardwalk."
  );
}

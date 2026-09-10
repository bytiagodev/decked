<p align="center">
  <img src="assets/decked-banner.webp" alt="DECKED - California Inspired Skate Shop" width="100%"/>
</p>

<p align="center">
  <strong>RIDE. STYLE. REPEAT.</strong><br>
  <sub>Venice Beach, California. Fictional brand, real storefront.</sub>
</p>

<p align="center">
  <a href="https://bytiagodev.github.io/decked/"><strong>Browse the shop</strong></a>
</p>

---

DECKED is a fictional skate and lifestyle brand. I built it to practice complex e-commerce flows without writing any backend, to see how much of a real store I could simulate with static files and browser tools alone. You can browse 42 products, filter by category, fill a cart, register, check out, and come back later to find your order history still sitting there.

## THE SPEC SHEET

| | |
| --- | --- |
| Catalogue | 42 products across 6 categories |
| Pages | 8, plain HTML, no router |
| Server | none |
| Database | none |
| Cart, accounts, orders, stock | `localStorage` |
| Build step | none. Push and it is live |

## THE LOOK

Most skate brands go dark and gritty. This one goes to the boardwalk at golden hour: cream white ground, coral red on pricing, seafoam on every primary button, sunset orange on the low-stock dots. Archivo carries the UI, Instrument Serif carries the headings, and Spline Sans Mono handles prices, category tags and stock labels, so the numbers always read as data.

## THE FAKE BACKEND

Every product has an ID, and the cart is just an array of those IDs with quantities. Registering saves a name and email locally. Checkout generates an order number, works out shipping, writes the receipt to the browser and keeps it across reloads. Stock levels can be flipped on a product page to see how the grid reacts.

None of it is secure. Anyone can open devtools and give themselves a free deck. That is the honest trade of the exercise: what it actually taught me was how to keep state consistent across eight separate vanilla JavaScript pages that share nothing but a storage key.

---

<p align="center">
  <img src="assets/decked-wheel.png" alt="DECKED" width="40"/>
  <br/>
  <sub>DECKED &copy; 2026 · Built by <a href="https://bytiago.com/">Tiago Teixeira</a></sub>
</p>

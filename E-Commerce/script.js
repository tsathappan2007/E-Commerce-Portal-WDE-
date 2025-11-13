// Sample Products
const products = [
  { name: "Smartphone", price: 25000, image:"C:/Users/Thiruppathi S/Desktop/E-Commerce/img1.jpg" },
  { name: "Laptop", price: 65000, image:"C:/Users/Thiruppathi S/Desktop/E-Commerce/img3.jpg"},
  { name: "Headphones", price: 3000, image:"C:/Users/Thiruppathi S/Desktop/E-Commerce/img2.jpg"},
  { name: "Smartwatch", price: 7000, image:"C:/Users/Thiruppathi S/Desktop/E-Commerce/img4.jpg"},
  { name: "Camera", price: 45000, image:"C:/Users/Thiruppathi S/Desktop/E-Commerce/img5.jpg"}
];

// Display Products
const grid = document.getElementById("productGrid");
products.forEach(p => {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price.toLocaleString()}</p>
      <button class="buy-now" onclick="buyNow('${p.name}')">Buy Now</button>
      <button class="add-cart" onclick="addToCart('${p.name}')">Add to Cart</button>
      <button class="add-wishlist" onclick="addToWishlist('${p.name}')">Add to Wishlist</button>
    </div>`;
});

// Wishlist / Cart arrays
let wishlist = [];
let cart = [];

// Functions
function addToWishlist(item) {
  wishlist.push(item);
  displayList('wishlistItems', wishlist, 'Wishlist');
}

function addToCart(item) {
  cart.push(item);
  displayList('cartItems', cart, 'Cart');
}

function buyNow(item) {
  alert(`✅ You purchased ${item}! Thank you for shopping.`);
}

function displayList(containerId, items, title) {
  document.getElementById(containerId).innerHTML = items.length ?
    `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>` :
    `<p>No items in your ${title.toLowerCase()} yet.</p>`;
}

// Search
function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  grid.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  if (filtered.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
  } else {
    filtered.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>₹${p.price.toLocaleString()}</p>
          <button class="buy-now" onclick="buyNow('${p.name}')">Buy Now</button>
          <button class="add-cart" onclick="addToCart('${p.name}')">Add to Cart</button>
          <button class="add-wishlist" onclick="addToWishlist('${p.name}')">Add to Wishlist</button>
        </div>`;
    });
  }
}

// Modals
document.getElementById('loginBtn').onclick = () => openModal('loginModal');
document.getElementById('registerBtn').onclick = () => openModal('registerModal');

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Validation
function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  if (!email.includes("@") || pass.length < 6) {
    alert("Invalid login details!");
    return false;
  }
  alert("Login successful!");
  closeModal("loginModal");
  return false;
}

function validateRegister() {
  const pass = document.getElementById("regPass").value;
  const confirm = document.getElementById("regConfirm").value;
  if (pass !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Registration successful!");
  closeModal("registerModal");
  return false;
}

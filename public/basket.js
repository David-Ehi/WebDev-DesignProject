let products = [];


async function loadProducts() {
  try {
    const response = await fetch("prods.json");
    products = await response.json();
    renderBasket();
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

function getCart(){
  
  var cart = JSON.parse(localStorage.getItem("cart"))
  if (cart === null){
    cart = []
  }
  return cart;

};

function renderBasket() {
  const cart = getCart();
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <li class="list-group-item text-center">
        Your basket is empty
      </li>
    `;
    cartTotal.innerText = "0";
    return;
  }

  cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return;

    const lineTotal = product.price * cartItem.quantity;
    total += lineTotal;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <strong>${product.name}</strong><br>
        €${product.price.toLocaleString()} × ${cartItem.quantity}
      </div>
      <span class="fw-bold">
        €${lineTotal.toLocaleString()}
      </span>
    `;

    cartList.appendChild(li);
  });

  cartTotal.innerText = total.toLocaleString();
}

loadProducts();

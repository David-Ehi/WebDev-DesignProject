async function getProducts() {
  try {
	const response = await fetch("prods.json");
	const result = await response.json();
	console.log(result);
  displayProducts(result)

} catch (error) {
	console.error(error);
}
}

function displayProducts(items) {

  const container = document.getElementById("productRow");
  container.innerHTML = "";

  items.forEach(item => {

    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
card.innerHTML = `
  <div class="card h-100">
    <img src="${item.image}" class="card-img-top">
    <div class="card-body">
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <p class="fw-bold">€${item.price.toLocaleString()}</p>
      <button class="btn btn-dark" onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  </div>
`;
    

    container.appendChild(card);
  });
}

function addToCart(id){
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
if(existing){
  existing.quantity++;
}
else{
  cart.push({ id: id, quantity: 1 });

}
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart)
  updateCartCount();

};

function getCart(){
  
  var cart = JSON.parse(localStorage.getItem("cart"))
  if (cart === null){
    cart = []
  }
  return cart;

};

function updateCartCount() {
    const cart = getCart();
    let total = 0
    const basketnav = document.getElementById("amount")

    cart.forEach(car => {
        total = total + car.quantity
    });
    if(total > 0){
        basketnav.innerText=` (${total})` 
    } else{
        basketnav.innerText = "";
    }
}


getProducts();
updateCartCount();
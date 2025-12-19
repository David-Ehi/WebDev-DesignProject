document.addEventListener("DOMContentLoaded", function () {
    const loginNav = document.getElementById("loginNav");

    if (!loginNav) return;

    const user = localStorage.getItem("user");

    if (user) {
        const parsedUser = JSON.parse(user);
        loginNav.textContent = `Hello, ${parsedUser.name}`;
        loginNav.href = "/logout";
    }
});

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


function getCart(){
  
  var cart = JSON.parse(localStorage.getItem("cart"))
  if (cart === null){
    cart = []
  }
  return cart;

};

updateCartCount();

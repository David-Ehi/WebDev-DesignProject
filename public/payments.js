const form = document.getElementById("paymentForm");
const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("cvc");
const expiry = document.getElementById("expiry");
const cardName = document.getElementById("cardName");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let cardValid = false;
  let cvcValid = false;
  let expiryValid = false;
  let nameValid = false;

  let cleanCardNumber = cardNumber.value.replaceAll(" ", "");

  if (cleanCardNumber.length === 16) {
    cardValid = true;
  } else {
    alert("Card number must be 16 digits");
  }

  if (cvc.value.length === 3) {
    cvcValid = true;
  } else {
    alert("CVC must be 3 digits");
  }

  if (expiry.value.length > 0) {
    expiryValid = true;
  } else {
    alert("Please enter an expiry date");
  }

  if (cardName.value.length > 0) {
    nameValid = true;
  } else {
    alert("Please enter the name on the card");
  }

  if (cardValid === true && cvcValid === true && expiryValid === true && nameValid === true) {
    window.location.href = "/thankyou";
  }

});

// function toggleShoppingCart() {
//     var shoppingCart = document.getElementById("shoppingCart");

//     shoppingCart.style.display = (shoppingCart.style.display === 'block') ? 'none' : 'block';
// }

// document.getElementById("show-1").addEventListener("click", toggleShoppingCart);

//   function toggleloginform() {
//     var loginForm = document.getElementById("login-form");

//     loginForm.style.display = (loginForm.style.display === 'block') ? 'none' : 'block';
// }

// document.getElementById("show-2").addEventListener("click", toggleloginform);


// on click to button open accout page
//for index page
function home_i() {//for main page
  window.location.href = "index.html";
}
function account() {
  window.location.href = "pages/account.html";
}
function shopping() {
  window.location.href = "pages/shopping.html";
}
function pharma() {
  window.location.href = "pages/medicine.html";
}
function kirana() {
  window.location.href = "pages/kirana.html";
}
//for index page end here

function ShopToAccount() {//for shopping cart page only
  window.location.href = "account.html";
}

function home_a() {//for all pages expect main page
  window.location.href = "../index.html";
}
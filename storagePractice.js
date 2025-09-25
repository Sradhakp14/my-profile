
const user = {
  name: "sradha",
  email: "sradha@gmail.com",
  loggedIn: true
};

localStorage.setItem('user', JSON.stringify(user));

function printUserName() {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const userObj = JSON.parse(userStr);
    console.log("User name:", userObj.name);
  } else {
    console.log("No user found in localStorage");
  }
}
printUserName();
function removeUser() {
  localStorage.removeItem('user');
  console.log("User removed from localStorage");
}

function addToCart(item) {
  const cartStr = localStorage.getItem('cart');
  const cart = cartStr ? JSON.parse(cartStr) : [];

  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(`Added "${item}" to cart. Total items: ${cart.length}`);
}

function getCartCount() {
  const cartStr = localStorage.getItem('cart');
  const cart = cartStr ? JSON.parse(cartStr) : [];
  return cart.length;
}

addToCart("Apple");
addToCart("Banana");
console.log("Total items in cart:", getCartCount());

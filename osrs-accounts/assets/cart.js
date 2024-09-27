// let cart = {}; // Object to store items in the cart

// // Function to add product to cart
// function addToCart(productId, productName, productPrice, sellixId) {
//     // Check if the item is already in the cart
//     if (cart[productId]) {
//         cart[productId].quantity += 1; // Increase quantity
//     } else {
//         // Add new item to the cart
//         cart[productId] = {
//             name: productName,
//             price: productPrice,
//             quantity: 1,
//             sellixId: sellixId // Store the Sellix product ID
//         };
//     }
//     updateCart();
// }

// // Function to update the cart UI
// function updateCart() {
//     const cartItemsDiv = document.getElementById('cart-items');
//     cartItemsDiv.innerHTML = ''; // Clear the cart display

//     let total = 0;

//     // Loop through the cart items and display them
//     for (let productId in cart) {
//         const item = cart[productId];
//         total += item.price * item.quantity;

//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('cart-item');
//         itemDiv.innerHTML = `
//             <span>${item.name}</span>
//             <span>Price: $${item.price.toFixed(2)}</span>
//             <span>Quantity: <button onclick="changeQuantity('${productId}', -1)">-</button> ${item.quantity} <button onclick="changeQuantity('${productId}', 1)">+</button></span>
//             <span>Total: $${(item.price * item.quantity).toFixed(2)}</span>
//         `;

//         cartItemsDiv.appendChild(itemDiv);
//     }

//     // Update the total cost
//     document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
// }

// // Function to change the quantity of an item
// function changeQuantity(productId, amount) {
//     if (cart[productId]) {
//         cart[productId].quantity += amount;

//         if (cart[productId].quantity <= 0) {
//             delete cart[productId]; // Remove the item if quantity goes to 0
//         }

//         updateCart(); // Update the cart display
//     }
// }

// // Function to generate Sellix payment link
// function generateSellixPaymentLink() {
//     let baseUrl = "https://osrsservicesaccounts.mysellix.io/payment?products="; // Replace 'mystore' with your actual store slug
//     let products = [];

//     // Loop through cart items and construct the Sellix link
//     for (let productId in cart) {
//         const item = cart[productId];
//         // Add product ID and quantity to the products array
//         products.push(`${item.sellixId}:${item.quantity}`);
//     }

//     // Join all products with commas
//     const paymentUrl = baseUrl + products.join(',');

//     // Log or redirect to payment URL
//     console.log(paymentUrl);  // For debugging, check the URL
//     window.location.href = paymentUrl;  // Redirect to Sellix for payment
// }

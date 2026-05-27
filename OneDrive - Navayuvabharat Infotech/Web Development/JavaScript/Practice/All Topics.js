// ===========================================================
// APPLICATION-LEVEL: E-Commerce Order Management (6–7 Items Ordered)
// ===========================================================

// System Variables
let taxRate = 0.18;
const deliveryCharge = 60;
var appName = "MegaMart Superstore";

// Product Catalog (10+ items)
const catalog = [
    { id: 101, name: "Laptop", price: 45000, category: "Electronics" },
    { id: 102, name: "Shoes", price: 1500, category: "Fashion" },
    { id: 103, name: "Watch", price: 2500, category: "Accessories" },
    { id: 104, name: "Mobile Phone", price: 22000, category: "Electronics" },
    { id: 105, name: "Backpack", price: 900, category: "Fashion" },
    { id: 106, name: "Bluetooth Speaker", price: 3000, category: "Electronics" },
    { id: 107, name: "Sunglasses", price: 1200, category: "Accessories" },
    { id: 108, name: "T-Shirt", price: 600, category: "Fashion" },
    { id: 109, name: "Wireless Mouse", price: 800, category: "Electronics" },
    { id: 110, name: "Water Bottle", price: 350, category: "Home" },
    { id: 111, name: "Casual-Shirt", price: 800, category: "Fashion" }
];

// Discount Map
const discountMap = new Map([
    ["Electronics", 0.10],
    ["Fashion", 0.05],
    ["Accessories", 0.08],
    ["Home", 0.03]
]);

// Function to calculate bill for an item
function calculateFinalPrice(product, qty) {
    let subtotal = product.price * qty;  // Arithmetic
    let discount = subtotal * (discountMap.get(product.category) || 0);
    let taxedAmount = (subtotal - discount) * taxRate;
    let total = subtotal - discount + taxedAmount + deliveryCharge;
    return { subtotal, discount, taxedAmount, total };
}

// User Order (6–7 items)
const order = {
    customerName: "Jeevan Kumar",
    items: [
        { productId: 101, qty: 1 },
        { productId: 102, qty: 2 },
        { productId: 103, qty: 1 },
        { productId: 104, qty: 1 },
        { productId: 106, qty: 1 },
        { productId: 108, qty: 2 },
        { productId: 111, qty: 1 }
    ],
    paymentMethod: "UPI"
};

// Invoice Header
console.log(`\n========= ${appName} | ORDER INVOICE (${new Date().toLocaleString()}) =========\n`);
console.log(`Customer Name: ${order.customerName}`);
console.log("---------------------------------------------------------------");

let grandTotal = 0;

// Process each item
for (let item of order.items) {
    let product = catalog.find(p => p.id === item.productId); // Comparison

    if (!product) {
        console.log(`Product ID ${item.productId} not found.`);
        continue;
    }

    let bill = calculateFinalPrice(product, item.qty);

    console.log(`Product: ${product.name}`);
    console.log(`Category: ${product.category}`);
    console.log(`Quantity: ${item.qty}`);
    console.log(`Subtotal: ₹${bill.subtotal}`);
    console.log(`Discount: -₹${bill.discount}`);
    console.log(`Tax: +₹${bill.taxedAmount}`);
    console.log(`Delivery: +₹${deliveryCharge}`);
    console.log(`Final Item Total: ₹${bill.total}`);
    console.log("---------------------------------------------------------------");

    grandTotal += bill.total;
}

// Switch case for payment status
let paymentMessage;
switch (order.paymentMethod) {
    case "UPI":
        paymentMessage = "UPI Payment Successful";
        break;
    case "Card":
        paymentMessage = "Card Payment Completed";
        break;
    case "NetBanking":
        paymentMessage = "NetBanking Payment Completed";
        break;
    case "COD":
        paymentMessage = "Cash On Delivery Selected";
        break;
    default:
        paymentMessage = "Payment Method Not Recognized";
}

// Logical + Ternary operator for free gift
let freeGift = grandTotal > 5000 && order.items.length >= 2
    ? "🎁 Congratulations! You earned a FREE Coffee Mug!"
    : "No Free Gift";

console.log(`Payment Status: ${paymentMessage}`);
console.log(`GRAND TOTAL: ₹${grandTotal}`);
console.log(`Gift Status: ${freeGift}`);
console.log("================================================================\n");


console.log("My Product Inventory Project");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
} else {
    console.log("Invalid product details!");
}

function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

console.log("--- Product Inventory ---");

inventory.forEach(function(product) {
    console.log(
        product.name + " ($" + product.price + ") - " +
        getCategory(product.price)
    );
});

const total = inventory.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log("Total Inventory Value: $" + total);

const affordable = inventory.filter(
    product => product.price < 200
);

console.log(
    "Affordable Products:",
    affordable.map(product => product.name)
);

const report = inventory.map(
    product => product.name.toUpperCase() + ": $" + product.price
);

console.log("Formatted Report:", report);

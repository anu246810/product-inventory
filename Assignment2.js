
let subtotal = Number(prompt("Enter bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

let tip = subtotal * tipPercentage / 100;

let total = subtotal;
total += tip;

console.log("Subtotal: $" + subtotal);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);

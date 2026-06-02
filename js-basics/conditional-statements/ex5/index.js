let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;

let discount = 0;

if (customerType === "vip") {
  discount = 0.20;
} else if (customerType === "premium") {
  discount = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.15 : 0.10;
} else if (customerType === "regular") {
  discount = purchaseAmount > 100 ? 0.10 : (purchaseAmount > 50 ? 0.05 : 0);
}

console.log("Discount: " + (discount * 100) + "%");
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 },
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let item of items) {
                if (!inventory[item] || inventory[item].stock <= 0) {
                    return reject(new Error(`${item} is out of stock`));
                }
            }
            resolve(items);
        }, 500);
    });
}

function calculateTotal(items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
            const tax = subtotal * 0.08;
            const total = subtotal + tax;
            resolve({ subtotal, tax, total });
        }, 200);
    });
}

function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.90) {
                const transactionId = 'TXN' + Math.floor(Math.random() * 1000000);
                resolve({ transactionId, amount, status: 'success' });
            } else {
                reject(new Error("Payment failed"));
            }
        }, 1500);
    });
}

function updateInventory(items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            items.forEach(item => {
                if (inventory[item]) {
                    inventory[item].stock -= 1;
                }
            });
            resolve("Inventory updated successfully");
        }, 300);
    });
}

function checkout(itemNames) {
    return checkInventory(itemNames)
        .then(items => calculateTotal(items))
        .then(financials => processPayment(financials.total))
        .then(paymentResult => updateInventory(itemNames).then(() => paymentResult));
}

checkout(['laptop', 'mouse'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop'])
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));
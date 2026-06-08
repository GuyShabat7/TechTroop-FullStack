function BankAccount(initialBalance) {
    this.balance = initialBalance || 0;

    this.getBalance = function() {
        return this.balance;
    };
    
    this.deposit = function(amount) {
        this.balance += amount;
        return this.balance;
    };
    
    this.withdraw = function(amount) {
        this.balance -= amount;
        return this.balance;
    };
}

module.exports = BankAccount;
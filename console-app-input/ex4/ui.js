const prompt = require('prompt-sync')();

function BankingUI() {
    this.displayMenu = function() {
        console.log("\n=== Banking System ===");
        console.log("1) Check Balance");
        console.log("2) Deposit Money");
        console.log("3) Withdraw Money");
        console.log("4) Exit");
    };

    this.askQuestion = function(question) {
        return prompt(question);
    };
}   

module.exports = BankingUI;
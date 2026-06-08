const BankAccount = require('./account');
const InputValidator = require('./validator');
const BankingUI = require('./ui');

function BankingApp(account, ui, validator) {
    this.start = function() {
        let isRunning = true;

        while(isRunning) {
            ui.displayMenu();
            const choice = ui.askQuestion("Choose option (1-4): ");

            if (!validator.isValidMenuChoice(choice)) {
                console.log("Invalid option. Please choose a number between 1 and 4.");
                continue;
            }

            if (choice === '1') {
                console.log(`Current balance: $${account.getBalance()}`);
            } else if (choice === '2') {
                const inputStr = ui.askQuestion("Enter amount to deposit: $");
                const amount = parseFloat(inputStr);
                
                if (!validator.isValidAmount(amount)) {
                console.log("Error: Amount must be a positive number.");
                } else {
                const newBalance = account.deposit(amount);
                console.log(`New balance: $${newBalance}`);
                }
            
            } else if (choice === '3') {
                const inputStr = ui.askQuestion("Enter amount to withdraw: $");
                const amount = parseFloat(inputStr);
                
                if (!validator.isValidAmount(amount)) {
                console.log("Error: Amount must be a positive number.");
                } else if (amount > account.getBalance()) {
                console.log("Error: Insufficient funds.");
                } else {
                const newBalance = account.withdraw(amount);
                console.log(`New balance: $${newBalance}`);
                }
            
            } else if (choice === '4') {
                console.log("Exiting... Goodbye!");
                isRunning = false; 
            }
        }
    };
}
const myAccount = new BankAccount(100);
const myValidator = new InputValidator();
const myUI = new BankingUI();
const app = new BankingApp(myAccount, myUI, myValidator);

app.start();

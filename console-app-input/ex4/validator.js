function InputValidator() {
    this.isValidMenuChoice = function(choice) {
        return choice === '1' || choice === '2' || choice === '3' || choice === '4';
    };
    
    this.isValidAmount = function(amount) {
        return !isNaN(amount) && amount > 0;
    };
}

module.exports = InputValidator;
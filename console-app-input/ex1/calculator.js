const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const operation = args[1];
const num2 = parseFloat(args[2]);

let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log("Division by zero is not allowed.");
            process.exit(1);
        }
        result = num1/num2;
        break;
    default:
        console.log("Invalid operation,use only +, -, *, /");
        process.exit(1);
}

console.log(`${num1} ${operation} ${num2} = ${result}`);
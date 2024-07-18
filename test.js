// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Calculator functionality
class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            console.log('Error: Division by zero is not allowed.');
            return undefined;
        }
        return a / b;
    }
}

// Main program function
function main() {
    const calculator = new Calculator();

    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            rl.question('Choose the operation (add, multiply, divide): ', (operation) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);

                let result;

                switch (operation.toLowerCase()) {
                    case 'add':
                        result = calculator.add(a, b);
                        break;
                    case 'multiply':
                        result = calculator.multiply(a, b);
                        break;
                    case 'divide':
                        result = calculator.divide(a, b);
                        break;
                    default:
                        console.log('Invalid operation. Please choose add, multiply, or divide.');
                        rl.close();
                        return;
                }

                console.log(`The result is: ${result}`);
                rl.close();
            });
        });
    });
}

// Run the program
main();
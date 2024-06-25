const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('Simple Calculator');
  console.log('Operations:\n1: Addition (+)\n2: Subtraction (-)\n3: Multiplication (*)\n4: Division (/)');
  
  function calculate(operation, num1, num2) {
    switch (operation) {
      case '1':
        return `${num1} + ${num2} = ${num1 + num2}`;
      case '2':
        return `${num1} - ${num2} = ${num1 - num2}`;
      case '3':
        return `${num1} * ${num2} = ${num1 * num2}`;
      case '4':
        if (num2 === 0) {
          return 'Error: Division by zero is not allowed.';
        } else {
          return `${num1} / ${num2} = ${num1 / num2}`;
        }
      default:
        return 'Invalid operation selected.';
    }
  }
  
  readline.question('Choose an operation (1-4): ', (operation) => {
    readline.question('Enter the first number: ', (firstNumber) => {
      readline.question('Enter the second number: ', (secondNumber) => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = calculate(operation, num1, num2);
        console.log(result);
        readline.close();
      });
    });
  });


  const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Simple Calculator');
console.log('Operations:\n1: Addition (+)\n2: Subtraction (-)\n3: Multiplication (*)\n4: Division (/)');

function calculate(operation, num1, num2) {
  switch (operation) {
    case '1':
      return `${num1} + ${num2} = ${num1 + num2}`;
    case '2':
      return `${num1} - ${num2} = ${num1 - num2}`;
    case '3':
      return `${num1} * ${num2} = ${num1 * num2}`;
    case '4':
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed.';
      } else {
        return `${num1} / ${num2} = ${num1 / num2}`;
      }
    default:
      return 'Invalid operation selected.';
  }
}

readline.question('Choose an operation (1-4): ', (operation) => {
  readline.question('Enter the first number: ', (firstNumber) => {
    readline.question('Enter the second number: ', (secondNumber) => {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);
      const result = calculate(operation, num1, num2);
      console.log(result);
      readline.close();
    });
  });
});
function evaluateExpression(expression) {
    // Remove any spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Initialize a variable to store the result
    let result = 0;

    // Initialize a variable to keep track of the current number
    let currentNumber = '';

    // Initialize a variable to keep track of the current operation (1 for addition, -1 for subtraction)
    let currentOperation = 1;

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '+' || char === '-') {
            // Apply the current number with the current operation
            result += currentOperation * parseInt(currentNumber);

            // Update the current operation
            currentOperation = (char === '+') ? 1 : -1;

            // Reset the current number
            currentNumber = '';
        } else {
            // Append the current character to the current number
            currentNumber += char;
        }
    }

    // Apply the last number with the current operation
    result += currentOperation * parseInt(currentNumber);

    return result;
}

// Example usage:
console.log(evaluateExpression("3 + 5 - 2")); // Outputs: 6
console.log(evaluateExpression("10 + 20 - 5 + 3 - 1")); // Outputs: 27
console.log(evaluateExpression("1-2-3+4+5")); // Outputs: 5
 

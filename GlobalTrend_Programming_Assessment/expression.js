function evaluateExpression(expression) {
      expression = expression.replace(/\s+/g, '');

       let result = 0;

      let currentNumber = '';

    let currentOperation = 1;

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '+' || char === '-') {
                      result += currentOperation * parseInt(currentNumber);

                      currentOperation = (char === '+') ? 1 : -1;

                       currentNumber = '';
        } else {
                       currentNumber += char;
        }
    }

      result += currentOperation * parseInt(currentNumber);

    return result;
}

// Example usage:
console.log(evaluateExpression("3 + 5 - 2")); // Outputs: 6
console.log(evaluateExpression("10 + 20 - 5 + 3 - 1")); // Outputs: 27
console.log(evaluateExpression("1-2-3+4+5")); // Outputs: 5
 

function generateFibonacci(n) {
    // Initialize an array to hold the Fibonacci sequence
    let fibonacci = [];
    
    // Handle edge cases for n <= 0
    if (n <= 0) {
        return fibonacci;
    }
    
    // The first number of the Fibonacci sequence is always 0
    fibonacci.push(0);
    
    // If n is 1, return the array with only the first number
    if (n === 1) {
        return fibonacci;
    }
    
    // The second number of the Fibonacci sequence is always 1
    fibonacci.push(1);
    
    // Generate the rest of the Fibonacci sequence
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
}

// Example usage:
console.log(generateFibonacci(5));  // Outputs: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(0));  // Outputs: []
console.log(generateFibonacci(1));  // Outputs: [0]

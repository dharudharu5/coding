function filterEvenNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

// Example usage:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Outputs: [1, 3, 5]
console.log(filterEvenNumbers([12, 15, 18, 21, 24])); // Outputs: [15, 21]
console.log(filterEvenNumbers([2, 4, 6, 8, 10])); // Outputs: []
console.log(filterEvenNumbers([1, 3, 5, 7, 9])); // Outputs: [1, 3, 5, 7, 9]

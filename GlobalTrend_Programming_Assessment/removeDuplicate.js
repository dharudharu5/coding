function removeDuplicates(array) {
    // Use a Set to remove duplicates, since Sets only allow unique values
    let uniqueSet = new Set(array);
    
    // Convert the Set back to an array
    let uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Outputs: ['a', 'b', 'c']
console.log(removeDuplicates([1, '1', 2, '2', 1, '1'])); // Outputs: [1, '1', 2, '2']

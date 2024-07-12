function flattenArray(nestedArray) {
    // Initialize an empty array to store the flattened result
    let flattened = [];

    // Define a helper function to recursively flatten the array
    function flatten(item) {
        if (Array.isArray(item)) {
            // If the item is an array, recursively flatten each element
            item.forEach(flatten);
        } else {
            // If the item is not an array, add it to the flattened array
            flattened.push(item);
        }
    }

    // Start the flattening process
    nestedArray.forEach(flatten);

    return flattened;
}

// Example usage:
console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); // Outputs: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[1, 2, [3]], 4])); // Outputs: [1, 2, 3, 4]
console.log(flattenArray([1, [2, 3], [4, [5, [6]]]])); // Outputs: [1, 2, 3, 4, 5, 6]

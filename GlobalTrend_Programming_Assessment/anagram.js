function areAnagrams(str1, str2) {
    // Function to clean and sort a string
    function cleanAndSort(str) {
        return str.replace(/\s+/g, '')  // Remove spaces
                  .toLowerCase()        // Convert to lowercase
                  .split('')            // Split into an array of characters
                  .sort()               // Sort the characters
                  .join('');            // Join the characters back into a string
    }

    // Clean and sort both strings and compare the results
    return cleanAndSort(str1) === cleanAndSort(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Outputs: true
console.log(areAnagrams("triangle", "integral")); // Outputs: true
console.log(areAnagrams("apple", "pale")); // Outputs: false
console.log(areAnagrams("A gentleman", "Elegant man")); // Outputs: true

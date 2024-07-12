function capitalizeWords(str) {
    return str.split(' ')            // Split the string into an array of words
              .map(word => {
                  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              })                      // Capitalize the first letter of each word
              .join(' ');             // Join the words back into a single string
}

// Example usage:
console.log(capitalizeWords("hello world")); // Outputs: "Hello World"
console.log(capitalizeWords("javaScript is fun")); // Outputs: "Javascript Is Fun"
console.log(capitalizeWords("capitalize the first letter of each word")); // Outputs: "Capitalize The First Letter Of Each Word"

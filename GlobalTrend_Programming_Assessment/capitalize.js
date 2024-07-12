function capitalizeWords(str) {
    return str.split(' ')            
              .map(word => {
                  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              })                      
              .join(' ');            
}

console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javaScript is fun"));
console.log(capitalizeWords("capitalize the first letter of each word"));

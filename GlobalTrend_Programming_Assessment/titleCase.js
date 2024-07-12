function toTitleCase(str) {
    return str.split(' ')             
              .map(word => {
                  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              })                     
              .join(' ');             
}

console.log(toTitleCase("hello world"));
console.log(toTitleCase("convert this string to title case")); 

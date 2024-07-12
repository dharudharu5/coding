function areAnagrams(str1, str2) {
    function cleanAndSort(str) {
        return str.replace(/\s+/g, '') 
                  .toLowerCase()        
                  .split('')           
                  .sort()             
                  .join('');          
    }
    return cleanAndSort(str1) === cleanAndSort(str2);
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("triangle", "integral")); 
console.log(areAnagrams("apple", "pale")); 
console.log(areAnagrams("A gentleman", "Elegant man")); 

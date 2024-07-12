function removeDuplicates(array) {
       let uniqueSet = new Set(array);
    
       let uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));
console.log(removeDuplicates([1, '1', 2, '2', 1, '1']));

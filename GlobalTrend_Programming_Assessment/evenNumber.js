function filterEvenNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([12, 15, 18, 21, 24]));
console.log(filterEvenNumbers([2, 4, 6, 8, 10])); 
console.log(filterEvenNumbers([1, 3, 5, 7, 9])); 

function generateFibonacci(n) {
       let fibonacci = [];
    
       if (n <= 0) {
        return fibonacci;
    }
    
      fibonacci.push(0);
    
      if (n === 1) {
        return fibonacci;
    }
    
       fibonacci.push(1);
    
       for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
}

console.log(generateFibonacci(5)); 
console.log(generateFibonacci(10)); 
console.log(generateFibonacci(0)); 
console.log(generateFibonacci(1)); 

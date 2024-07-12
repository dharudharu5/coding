class HashMap {
    constructor() {
        this.map = {};
    }

    // Method to add a key-value pair to the HashMap
    put(key, value) {
        this.map[key] = value;
    }

    // Method to retrieve the value for a given key
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    // Method to remove a key-value pair from the HashMap
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

// Example usage:
const hashMap = new HashMap();
hashMap.put('name', 'Alice');
console.log(hashMap.get('name')); // Outputs: Alice
hashMap.put('age', 25);
console.log(hashMap.get('age')); // Outputs: 25
hashMap.remove('name');
console.log(hashMap.get('name')); // Outputs: undefined

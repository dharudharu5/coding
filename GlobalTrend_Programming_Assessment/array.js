function flattenArray(nestedArray) {
       let flattened = [];

        function flatten(item) {
        if (Array.isArray(item)) {
                      item.forEach(flatten);
        } else {
                       flattened.push(item);
        }
    }

       nestedArray.forEach(flatten);

    return flattened;
}


console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); 
console.log(flattenArray([[1, 2, [3]], 4]));
console.log(flattenArray([1, [2, 3], [4, [5, [6]]]])); 

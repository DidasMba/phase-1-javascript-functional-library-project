function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        // If it's an array, iterate through its elements
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate through its keys
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection; // Return the original collection
}

// Example usage with an array
const myArray = [1, 2, 3, 4];
myEach(myArray, (element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

// Example usage with an object
const myObject = { a: 1, b: 2, c: 3 };
myEach(myObject, (value, key) => {
    console.log(`Value for key ${key}: ${value}`);
});

function myMap(collection, callback) {
    // Initialize an empty array to store the results
    const result = [];

    if (Array.isArray(collection)) {
        // If it's an array, iterate through its elements
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If it's an object, iterate through its keys
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }

    // Return the new array with transformed values
    return result;
}

// Example usage with an array
const newArray1 = myMap([1, 2, 3], function(num) {
    return num * 3;
});
console.log(newArray1); // Output: [3, 6, 9]

// Example usage with an object
const newObject1 = myMap({ one: 1, two: 2, three: 3 }, function(num, key) {
    return num * 3;
});
console.log(newObject1); // Output: [3, 6, 9]


function myReduce(collection, callback, acc) {
    let accumulator = acc;

    // Determine the starting index/key for iteration
    let startIndex = 0;

    if (Array.isArray(collection)) {
        if (accumulator === undefined) {
            accumulator = collection[0];
            startIndex = 1;
        }
        for (let i = startIndex; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        
        if (accumulator === undefined) {
            accumulator = collection[keys[0]];
            startIndex = 1;
        }
        
        for (let i = startIndex; i < keys.length; i++) {
            const key = keys[i];
            accumulator = callback(accumulator, collection[key], collection);
        }
    } else {
        throw new Error('Invalid collection type');
    }

    return accumulator;
}

// Example usage with an array
const result1 = myReduce([1, 2, 3], function(acc, val) {
    return acc + val;
}, 10);
console.log(result1); // Output: 16

// Example usage with an object
const result2 = myReduce({ one: 1, two: 2, three: 3 }, function(acc, val) {
    return acc + val;
});
console.log(result2); // Output: 6


function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i]; // Found a matching element, return it
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                return collection[key]; // Found a matching element, return it
            }
        }
    } else {
        throw new Error('Invalid collection type');
    }

    return undefined; // No matching element found, return undefined
}

// Example usage with an array
const result1 = myFind([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
});
console.log(result1); // Output: 2

// Example usage with an object
const result2 = myFind({ one: 1, three: 3, four: 4, six: 6 }, function(num) {
    return num % 2 === 0;
});
console.log(result2); // Output: 4


function myFilter(collection, predicate) {
    const result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    } else {
        throw new Error('Invalid collection type');
    }

    return result;
}

// Example usage with an array
const result1 = myFilter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
});
console.log(result1); // Output: [2, 4, 6]

// Example usage with an object
const result2 = myFilter({ one: 1, three: 3, five: 5 }, function(num) {
    return num % 2 === 0;
});
console.log(result2); // Output: []

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    } else {
        throw new Error('Invalid collection type');
    }
}

// Example usage with an object
const size1 = mySize({ one: 1, two: 2, three: 3 });
console.log(size1); // Output: 3

// Example usage with an empty array
const size2 = mySize([]);
console.log(size2); // Output: 0

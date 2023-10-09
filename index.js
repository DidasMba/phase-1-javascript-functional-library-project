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


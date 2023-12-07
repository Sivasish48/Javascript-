// MAP

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

// Any value like all the primitive datatypes and object can be the value of the "valu"e and "key" keyword.


// It doesnot store repeated values .


// Essential map methods to perform

// 1.new Map()

// The new Map() method creates a new map object.


// We can create a javascript map by passing an array to new Map()

const cars = new Map([
    ['tyre',"CEAT"],
    ['seat',"recliner"],
    ['type',"sedan"]
])

// 2.The set() method

// we can element to the map using set() method

cars.set('driving',"automating")

// 3. The get method

// We can get the value of a key by using the get() method
console.log(cars.get('type'));// sedan

// 4. The size property

// the size property returns the number of elements in a map.

console.log(cars.size);// 4

// 5. The delete() method
// The delete() method removes a map element

cars.delete("seat")

console.log(cars.size);// 3

// 6. The has method()
// the has () method return the value in a boolean context if the element it does exist or doesnot exist


console.log(cars.has('seat'));// false

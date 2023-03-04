// Deepcopy that will copy every single type of data
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    // return primitives and null as is
    return obj;
  }

  if (obj instanceof Date) {
    // create a new date object with the same value
    return new Date(obj.getTime());
  }

  if (obj instanceof RegExp) {
    // create a new regular expression object with the same pattern and flags
    return new RegExp(obj.source, obj.flags);
  }

  if (obj instanceof Set) {
    // create a new set object with the same values
    const setCopy = new Set();
    obj.forEach((value) => {
      setCopy.add(deepCopy(value));
    });
    return setCopy;
  }

  if (obj instanceof Map) {
    // create a new map object with the same key-value pairs
    const mapCopy = new Map();
    obj.forEach((value, key) => {
      mapCopy.set(key, deepCopy(value));
    });
    return mapCopy;
  }

  if (Array.isArray(obj)) {
    // create a new array with the same elements
    const arrCopy = [];
    obj.forEach((value) => {
      arrCopy.push(deepCopy(value));
    });
    return arrCopy;
  }

  // create a new object with the same properties and values
  const objCopy = {};
  Object.keys(obj).forEach((key) => {
    objCopy[key] = deepCopy(obj[key]);
  });
  return objCopy;
}

/* 
Example:
const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'hiking'],
  info: {
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    phone: '555-1234'
  },
  favColors: new Set(['blue', 'green']),
  friends: new Map([
    ['Alice', { age: 28, job: 'engineer' }],
    ['Bob', { age: 32, job: 'teacher' }]
  ]),
  sayHello: function() {
    console.log('Hello!');
  }
};

const copy = deepCopy(original);

*/

/*
Note: structuredClone() is also inbuilt browser supported JS native method that deep clones with limitations. 
It does not clones below.
1. Function
2. DOM Nodes
3. Property descriptors, setters, getters
4. Object prototypes
*/



/*
Recommendation
1. To compare two object the fastest library is "fast-deep-equal"
*/

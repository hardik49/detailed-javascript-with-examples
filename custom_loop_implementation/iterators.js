/* This examples shows the custom implementation of javascript array function  */

const arr = [{ a: 1 }, { b: 2 }]


// ForEach
const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array)
  }
}


forEach(arr, (ele) => {
  if (ele.b) {
    ele.b = 3;
  }
})

console.log(arr)

// Map
const map = (array, cb) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(cb(array[i], i, array))
  }
  return newArr;
}

map(arr, (ele) => {
  if (ele.b) {
    ele.b = 4;
    return ele;
  }
});

// Filter
const filter = (array, cb) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) newArr.push(array[i])
  }
  return newArr;
}

filter(arr, (ele) => {
  if (ele.b === 2) {
    return ele;
  }
});

// Reduce
const reduce = (array, cb, initialValue) => {
  let currentValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (initialValue == null && i === 0) {
      currentValue = array[i]
    } else {
      currentValue = cb(initialValue, array[i], i, array)
    }
  }

  return currentValue;
}

// Some
const some = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) return true
  }
  return false
}

some([1, 2, 3, 4], ele => ele === 2)


// Every
const every = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) return false;
  }
  return true;
}

every([1, 2, 3, 4], ele => ele === 2);


// Flat
const flat = (array, depth = 1) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth) {
      newArray.push(...flat(array[i], depth - 1))
    } else {
      newArray.push(array[i])
    }
  }
  return newArray;
}

flat([1, [[2]], [[[3]]]], 3)

const arr1 = [
  ['name', 'id', 'awr'],
  ['Mike', '1', '12'],
  ['Robert', '2', '14'],
  ['Harry', '3', '16'],
  ['Tom', '4', '18'],
]

const arr2 = [
  ['name', 'id', 'weight', 'height'],
  ['Mike', '1', '111', '0'],
  ['Robert', '2', '22', '0'],
  ['Harry', '3', '33', '0'],
  ['Tom', '4', '44', '0'],
]

const arr3 = [
  ['name', 'id', 'age', 'gender'],
  ['Mike', '1', '12', 'M'],
  ['Robert', '2', '14', 'M'],
  ['Harry', '3', '16', 'M'],
  ['Tom', '4', '18', 'M'],
]

const makeObject = arr => {
  const [headings, ...otherArray] = arr;
  const ar = [];
  otherArray.forEach((curr) => {
    const obj = {};
    headings.forEach((ele, i) => {
      obj[ele] = curr[i]
    });
    ar.push(obj)
  });
  return ar;
}

const duplicateArray = [...makeObject(arr3), ...makeObject(arr2), ...makeObject(arr1)]

const mergeArray = arr => {
  const array = [];
  arr.forEach(ele => {
    let index1 = array.findIndex(e => e.id === ele.id);
    if (index1 !== -1) {
      array[index1] = { ...array[index1], ...ele }
    } else {
      array.push(ele);
    }
  })
  return array;
}

console.log(JSON.stringify(mergeArray(duplicateArray)));


/* 
  Here, In this example we always can use reduce 
  instead of forEach as we need new arrays 
*/
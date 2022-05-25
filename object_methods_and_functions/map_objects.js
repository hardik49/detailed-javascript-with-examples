/* MAP */

/* 
  The Map object holds key-value pairs and remembers the original insertion 
  order of the keys. Any value (both objects and primitive values) may be 
  used as either a key or a value. 
*/

const mapObject = new Map(); // This creates new map instance

mapObject.set('name', 'hardik'); // set is used to insert value to map
mapObject.set('age', 24);
mapObject.set('gender', 'male');

mapObject.get('name'); // get is used to return value of given property

mapObject.has('name'); // has return boolean value if name exists

mapObject.size; // size return length of map

mapObject.delete('name'); // delete removes name key value and returns boolean


/* A Map is an iterable, so it can be directly iterated. */

mapObject.forEach(e => console.log(e)); // hardik, 24, male

/* You can also use for..in loop to iterate it */



/* WEAK MAP */

/* 
  A WeakMap is a collection of key/value pairs whose keys must be objects, 
  with values of any arbitrary JavaScript type, and which does not create 
  strong references to its keys.

  Keys of WeakMaps are of the type Object only. Primitive data types as keys 
  are not allowed (e.g. a Symbol can't be a WeakMap key).
*/


const weakMapObj = new WeakMap();

const obj = {};
const fun1 = function () { };
const windows = window;

weakMapObj.set(obj, 20);
weakMapObj.set(fun1, 20);
weakMapObj.set(windows, obj);

weakMapObj.get(obj); // 20
weakMapObj.get(fun1); // 20
weakMapObj.get(windows); // {}

weakMapObj.has(obj); // true
weakMapObj.delete(obj); // true
weakMapObj.has(obj); // false


/*
  The main usage of weakmap is weakmap does not store any primitive types
  of data as its key but we must provide object or functions to store data.
  These values does not have strong reference so after usage it will be
  garbage collected as they have no references exists in memory.

  It allows garbage collection of any values if their key objects are not
  referenced from somewhere other than a WeakMap.

  => Limitation of weak map is you can not iterate over weakmap.
*/



/* MAP vs WEAKMAP */

/* 
- In weakmap you can not store key as any primitive type
- In map you can store key as primitive type

- In weakmap object values are garbage collected if they are not in use
- In map values are reachable untill map exists

- You can iterate over map
- You can not iterate over weakmap


** Usecase of weakmap **
  ------------------- visitsCount.js -------------------------
  let visitsCountMap = new WeakMap(); // weakmap: user => visits count

  // increase the visits count
  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
  }


** Usecase of map **
--------------------- cache.js -------------------------------
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result =  obj;
    cache.set(obj, result);
  }
  return cache.get(obj);
}

Now we use process() in another file:

----------------------- main.js -----------------------------
let obj = {};
let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
*/

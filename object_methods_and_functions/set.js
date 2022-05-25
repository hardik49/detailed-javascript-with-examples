/* SET */

/* 
  The Set object lets you store unique values of any type, 
  whether primitive values or object references. 

  => NaN and undefined can also be stored in a Set. 
     All NaN values are equated (i.e. NaN is considered 
     the same as NaN, even though NaN !== NaN).
*/

const mySet = new Set();

/* Set.add() inserts a value to set */
mySet.add(1) // Set [ 1 ]
mySet.add(9) // Set [ 1, 9 ]
mySet.add(9) // Set [ 1, 9 ]

mySet.has(1) // returns boolean value either value exists

mySet.size // return length of set

mySet.delete(1) // deletes value and return boolean value


/* Main advantage of using set is when you don't want duplicate values */

/* 
  Iteration over set:
      for (let item of mySet) console.log(item) // 9
      mySet.forEach(e => console.log(e)) // 9
*/



/* WEAKSET */

/* 
  WeakSet objects are collections of objects. 
  Just as with Sets, each object in a WeakSet may occur only once; 
  all objects in a WeakSet's collection are unique.

  The WeakSet is weak, meaning references to objects in a WeakSet 
  are held weakly. 
  If no other references to an object stored in the WeakSet exist, 
  those objects can be garbage collected.
 */

const weakSetObj = new WeakSet();

const obj1 = { a: 1 };
const obj2 = { a: 1 };

weakSetObj.add(obj1);
weakSetObj.add(obj2);

weakSetObj.has(obj1);    // true
weakSetObj.has(obj2);    // true

weakSetObj.delete(obj1); // removes obj1 from the set
weakSetObj.has(obj1);    // false, obj1 has been removed
weakSetObj.has(obj2);    // true, obj2 is retained


/* SET vs WEAKSET */

/* 
      - Set object lets you store unique values of any type
      - WeakSets are collections of objects only. 
        They cannot contain arbitrary values of any type, as Sets can.

      - As set stores values of any type it has strong reference to it.
        So when set is not in use those types are still in memory.
      - As weakset stores only object as type the object does not have 
        reference so when they are not in use it will be garbage collected.
*/
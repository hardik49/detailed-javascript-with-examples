/* There are nearly 3 ways in JS to check in Object if the property is exists */

const obj = {
  name: 'hardik',
  age: 24,
};

/* 
  1)  Object.hasOwn takes 2 arguments. 
      First an object it self and second is key/property.
      It will not check the value but just checks whether propery is exists.
*/

Object.hasOwn(obj, "name"); // true 


/* 2) Using "in". This checks key exists in object */

"name" in obj; // true


/* 3) Using hasOwnProperty*/
obj.hasOwnProperty("name")
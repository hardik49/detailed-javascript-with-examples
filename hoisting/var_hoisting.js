/* 
  "Var" is hoisted in memory by javascript. While calling it before
  initiallize it is always undefined. 
*/

var a;

console.log("a", a);

a = 10;

/* 
Function Hoisting:

Function is hoisted in memory by javascript.
Note: Arrow function Or A function expression where function is assigned 
to a variable will note be hoisted
*/


b();
function b() {
  console.log("hi")
}

/* Output: hi */


b();
let b = () => {
  console.log("hi")
}

/* Output: Uncaught ReferenceError: b is not defined */
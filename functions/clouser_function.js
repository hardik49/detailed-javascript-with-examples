/* 
  A closure is the combination of a function bundled together (enclosed) with 
  references to its surrounding state (the lexical environment). 
  
  In other words, a closure gives you access to an outer function's 
  scope from an inner function.
*/

function myFunction() {
  let age = 24;
  function closerFunction() {
    console.log("My age is ", age)
  }
  closerFunction();
}

myFunction()

/* 
  While calling myFunction it will call closureFunction.
  closureFunction is binded with age variable that it shares from its parent
  and can not accessible outside myFunction.
  
  This is called clouser function
*/

function x() {
  let a = 5;
  return function y() {
    console.log("a is ", a)
  }
}

const z = x();
z();

/* Here, after assigning to z, x will no longer available and will be
garbage collected. z will only have the return function y independent.
While calling z() it will only call y() but it still have access to a
however the global context is removed for function x  */



/* Uses of clousers */
/* 
  Module Design Pattern
  Currying
  Function like once
  Memoize
  Maintain state in async world
  setTimeoutes
  Iterators
  Encapsulation/ Data-hiding
*/


/* Encapsulation/ Data-hiding */
var counter = 0;

function incrementCounter() {
  counter++;
}

/* 
  Anybody in our code can access counter variable and can change it as it
  is outerscope. To prevent them to access it we can use clouser as example 
  given below.
 */

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++; // Changing value inside clouser so can not manipulate it outside counter function
  }
}

console.log(count) // You can not access to count. It can achieve to function

var counter1 = counter();
counter1(); // It only can increment the count

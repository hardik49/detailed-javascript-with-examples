/* 
  Curry is a technique in javascript that has same number of argmuent as nested function.
  Basically, In this technique function returns a function and this could be a long chain.
  That returns a value.

  To call nested function it canbe called like
  (fun1)(fun2)(fun3) and on
*/

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

sum(1)(2)(2) // 5

/* 
  Note: It called 3 times and sum function has 3 nested functions.
  Total number of arguments = Total number of nested function levels
*/

/* 
  OR
  (Shorthand) 
*/

const sum = a => b => c => a + b + c;

sum(1)(2)(2) // 5

/* What function curry is not? */

function sum(a) {
  return function (b, c) {
    return a + b + c;
  }
}

/* 
  Here, number of arguments are 3 and level of nesting levels are 2.
  This is not called curry but it is called partial application. 
*/
/* Syntax of basic arrow function */

const sum = (a, b) => {
  console.log(a + b)
}

sum(2, 3) // Output: 5


/* Without parenthesis syntax:

  Round braces for parameters are optional while you have only one argument.
*/

const withoutBraces = a => {
  console.log("a is", a)
}

withoutBraces(5) // Output: 5

/* Without body syntax:

  Curly braces for parameters and return keyword are optional while you have 
  only one function or line to return.
*/

const withoutBody = (a, b) => a + b;

/* OR */

const withoutBody = (a, b) => getResult(a, b, "SUM");
/* Assume, getResult a function that takes 3 arguments
2 numbers and Operation name */

withoutBody(2, 3) // Outout: 5

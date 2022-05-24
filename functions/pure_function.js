/* 
  A Pure Function is a function (a block of code) that always returns the 
  same result if the same arguments are passed and It does not mutate or 
  change any value outside the function. 

  It takes parameter and returns output by making any operation on that only 
  uses the parameter value and make operations on it.
  */

/* Remember what pure function is */

/* - It only uses the variable passed to it as parameter */
/* - It does not mutate any outside value */
/* - It every time should return same output if same input is given */

function calculateGST(productPrice) {
  return productPrice * 0.05;
}

function sum(a, b) {
  return a + b;
}

// calculateGST every time return same output by multiple by 0.05



// What pure function is not
let x = 10;
function add() {
  console.log(x);
  x++;
}

let res = add;
add(10) // 10
add(10) // 11
add(10) // 12
// It returns different output
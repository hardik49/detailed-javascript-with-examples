/* Temporal Deadzone */

/* 
  It is the state where variables are un-reachable. 
  They are in scope, but they aren't declared.
  
  It behaves different with var and let, const.
*/

/* With type Var */

if (true) {
  console.log(a); // variable 'a' is not declared yes
  var a = 10;
}

/* 
  Hence, variable a declared in the scope but we are accessing 
  before it's declaration. 
  So, here the variable is declared in temporal deadzone and var
  will defaulting its value to undefined.
*/


/* With let and const */

if (true) {
  console.log(a); // Accessing before declaring
  let a = 10;
}

if (true) {
  console.log(b); // Accessing before declaring
  const b = 15;
}

/* 
  In both the cases, variables are declared within temporal deadzone.
  But unlike var, let and const will not return undefined but it will
  throw an reference error that can't access variable before initialization.
 */
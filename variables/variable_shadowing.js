/* Variable Shadowing */

/* 
  Variable shadowing means to overwrite the variable values.
  It behaves some different with different types of variable. 
*/


/* Var type */
var a = 10;

if (true) {
  a = 15;
}

console.log(a); // 15

/* 
  For var,  as it accessible at any scope 
  it will permenantly overwrites its value. 
*/


/* Let type */
let a = 10;

if (true) {
  let a = 15;
  console.log(a) // 15 (here, the shadowing takes place)
}

console.log(a); // 10 
// (As can see it does not mutate value as let has block level scope)


/* Const type */
const a = 10;

if (true) {
  const a = 15;
  console.log(a) // 15
}

console.log(a) // 10
// Const is also has block level scope, it does value shadowing within the scope


/* 
  Illegal shadowing:

  When variable with var is declared and you declare let variable 
  it will overwrite or shadow that variable but when let variable 
  is declared and you create another variable with same name will 
  throw error as variable is already declared. This is called 
  illegal shadowing 

  function test () {
    var a = 'hello'
    let b = 'world'

    if (true) {
      let a = 'hi' // will overwrite the value of a
      var b = 'bye'// will gives error
    }
  }

  test();
*/
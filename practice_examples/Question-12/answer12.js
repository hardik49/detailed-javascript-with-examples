var x = 21;
var fun1 = function () {
  console.log(x);

  var x = 20;
}

fun1(); // undefined

/* 
  It is neither 20 or 21 but undefined.
  Here, we want to shadow x's value with 20 but before assigning it will
  be hoisted and default value of var is undefined.
*/

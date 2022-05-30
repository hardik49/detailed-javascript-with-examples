/* What is the output of fun1()? */

var x = 21;
var fun1 = function () {
  console.log(x);

  var x = 20;
}

fun1();

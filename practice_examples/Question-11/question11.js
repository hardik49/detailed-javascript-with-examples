/* What is output of the following code? */

let x = true
let count = 0;

setTimeout(() => {
  x = false;
}, 2000);

setInterval(() => {
  if (x) {
    console.log(count++)
  }
}, 200);

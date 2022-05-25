/* What is output of the following code? */

let x = true;

setTimeout(() => {
  x = false;
});

while (x) {
  console.log("Hello");
}
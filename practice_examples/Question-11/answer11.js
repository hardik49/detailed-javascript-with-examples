let x = true
let count = 0;

setTimeout(() => {
  x = false;
}, 2000);

setInterval(() => {
  if (x) {
    console.log(count++)
  }
}, 200); // Counter + 1 on 200ms 

/* 
  Output 

  0
  1
  2
  3
  4
  5
  6
  7
  8

  Because, counter will be incremented on 200ms.
  So, to while condition become false it will take 2000 ms.
  Hence, it will print number 9 times = 1800 ms and on last time at 2000
  condition will be false.
*/

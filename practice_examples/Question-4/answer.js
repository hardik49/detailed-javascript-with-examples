console.log("a");
setTimeout(() => console.log("b"), 0); // it will be send to callback queue
Promise.resolve(() => console.log("c")).then((res) => res()); // it will be send to micro task queue
console.log("d")


/* 
  Output
 
  a
  d
  c
  b
*/


/* 
  Note: Micro task queue has higher priority over task/callback queue.
 */
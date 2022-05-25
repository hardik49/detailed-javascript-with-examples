for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("Value of a is ", i);
  }, 0);
}

/* 
  Here, we declare a variable as var.
  We need to understand that log in setTimeout have access to reference of i
  and not value of i.
  When setTimeout calls it basically goes to callback queue.
  Once loop execution finishes the setTimeout code will execute.
  At time of execution loop has finish executing hence value of i is 5.
  So, log will print 5 times 5.
  
*/

/* 
  Solution: 
    We can use let instead var. let has block level scope.
    So every i variable has new reference and independent from each other.
*/

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("Value of a is ", i);
  }, 0);
}

/* 
  If we still want to use var instead of let we can wrap it inside clouser.
  Remember, clouser always remember its lexical scope variables and its reference.
  It has always access to it.  
*/

for (var i = 0; i < 5; i++) {
  function myFunc(i) {
    setTimeout(() => {
      console.log("Value of a is ", i); // Uses lexical scope environment
    }, 0);
  }
  myFunc(i);
}

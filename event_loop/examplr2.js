/* Nessesity of async functions */

function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');

// Below is a synchronous code. It has to wait to print done until task finishes its execution.

// Callbacks to the rescue
console.log('Start script...');

setTimeout(() => {
  task('Download a file.');
}, 1000);

console.log('Done!');

/*  
   In here, setTimeout callback use make it efficient.
 As setTimeout is part of webAPI and not node js it will be sent to 
 callback queue and execution will be continue.

 It will check untill callstack is not empty the code will not
 execute.
*/
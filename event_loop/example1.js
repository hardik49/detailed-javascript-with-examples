function callMe() {
  setTimeout(() => console.log("#1 Hello from timeout 1"), 0); // Sent to callback/task queue
  Promise.resolve().then(() => console.log('#1 Hello from promise 1')); // Send to micro task queue
  const promise = Promise.resolve(); // Does nothing
  setTimeout(() => console.log("#1 Hello from timeout 2"), 0); // Callback queue
  console.log('#1 Hello from main console'); // Call and send to callstack
  setTimeout(() => promise.then(() => console.log("#1 Hello from promise 2")), 0);
  /* Send to callback queue and then send its callback to micro task queue as it comprises promise */
}

callMe();

/* 
  Output: 
    #1 Hello from main console
    #1 Hello from promise 1
    undefined
    #1 Hello from timeout 1
    #1 Hello from timeout 2
    #1 Hello from promise 2
*/


/*
 Question:
  What comes under callback queue and micro task queue?
  -> Functions callbacks comes under callback queue.
  -> Promise callbacks and mutation observer comes under micro task queue (fetch is also part of it)
  -> Micro task queue has higher priority than callback queue
*/
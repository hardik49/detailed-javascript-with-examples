/* 
  Immediately Invoked Function Expression is a type of function that 
  declares and calls at the same time 
*/
let response;
(
  async function () {
    response = await fetch('http://randomapis.com')
  }
)();

/* By using () will call the function immediately after declaring */
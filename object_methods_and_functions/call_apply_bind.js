/* 
  Use cases of call, apply and bind are:
    Call:
    -> Call takes arguments with comma seprated and calls function with its value

    Apply:
    -> The only difference between apply and call is apply takes arguments in array

    Bind:  
    -> Returns a new function whose this value is bound to the provided value.
*/

let a = {
  name: 'hdk',
  display: function (h1) {
    return `Hey ${this.name} ${h1}`;
  }
}

let b = { name: 'hardik' }

// Call:
a.display.call(b, 'HI', 'Hello'); // 'Hey hardik HI Hello'

// Apply:
a.display.apply(b, ['HI', 'Hello']) // 'Hey hardik HI Hello'

// Bind:
const newFun = a.display.bind(b); // Create new function binded with b's value
newFun("hi", "hello"); // // 'Hey hardik HI Hello'
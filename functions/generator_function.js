/* 
  A generator is a special type of function which does not return 
  a single value, instead, it returns an iterator object with a 
  sequence of values. In a generator function, a yield statement 
  is used rather than a return statement. The following is a simple
  generator function. Example: Generator Function.
*/

function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
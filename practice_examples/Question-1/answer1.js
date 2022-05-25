function foo() {
  let a = 1;
  return function () {
    let b = 1;
    console.log(++a, ++b);
  }
}

const bar = foo()

bar();
bar();


/* 
  Output 

  2 2
  3 2

  bar() represents the clouser function defined in foo.
  A clouser always remembers its lexical scope hence the value of a is always
  maintained and refrenced by bar();
  While clouser has its own scope value of b. so it will every time initialize at
  1 while function called.
*/



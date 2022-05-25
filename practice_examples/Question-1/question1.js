/* What is the output of calling bar() here twice? */

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

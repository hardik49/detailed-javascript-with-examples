let obj = {
  foo: "boo",
  a: function () {
    var b = this;
    console.log(this.foo); // boo
    console.log(b.foo); // boo
    (function () {
      console.log(this.foo); // undefined
      console.log(b.foo); // boo
    })();
  }
}

obj.a();

/* 
  Output

  Hence IIFE is independent function and for it 'this' would be a global variable.
  boo
  boo
  undefined
  boo
*/
/* What is the output will be calling obj.a() here? */

let obj = {
  foo: "boo",
  a: function () {
    var b = this;
    console.log(this.foo);
    console.log(b.foo);
    (function () {
      console.log(this.foo);
      console.log(b.foo);
    })();
  }
}

obj.a();
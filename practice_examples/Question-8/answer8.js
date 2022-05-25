function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  }
}

add(5)(2)(4)(5)();
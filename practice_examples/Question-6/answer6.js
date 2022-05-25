function a2() {
  let a1 = 0;
  return function () {
    if (a1 > 0) {
      console.log('already called')
    } else {
      a1++;
      console.log('first time called')
    }
  }
}

let an1 = a2();
an1(); // 'first time called'
an1(); // 'already called'

/* Note: Clouser remembers its lexical scope. So second time the value of a1 is 1 */
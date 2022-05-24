function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log("🚀 ~ file: constructor_function.js ~ line 6 ~ Counter ~ count", count);
  }
  this.decrementCounter = function () {
    count--;
    console.log("🚀 ~ file: constructor_function.js ~ line 10 ~ Counter ~ count", count);
  }
}

const counterStart = new Counter();

counterStart.incrementCounter()
counterStart.decrementCounter()

/* 
  To call constructor function use new key word.
  General basic naming convention is use letter case to define these functions 
*/
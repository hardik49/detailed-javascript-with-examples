function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
  }
  this.decrementCounter = function () {
    count--;
  }
}

const counterStart = new Counter();

counterStart.incrementCounter()
counterStart.decrementCounter()

/* 
  To call constructor function use new key word.
  General basic naming convention is use letter case to define these functions 
*/
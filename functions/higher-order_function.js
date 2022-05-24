/* 
  A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
  ex.map,filter and reduce
*/

const arr = [{ name: "hardik", age: 24 }, { name: "bhavin", age: 24 }];

function callback(ele) {
  if (ele.name === 'bhavin') {
    ele.age = 25;
  }
}

arr.forEach(callback)


/* We can also use example of function curry */

const add = x => y => x + y;

add(2, 3) //5


/* Good Example using higher order function*/

const radius = [3, 1, 2, 4];

const area = radius => Math.PI * radius * radius;

const circumference = radius => 2 * Math.PI * radius;

const diameter = radius => 2 * radius;

const calculate = logic => radius.map(e => logic(e));
/* OR */
const calculate = logic => radius.map(area);



/* Without higher order function and short syntax it could be */

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius);
  }
  return output;
}

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
}

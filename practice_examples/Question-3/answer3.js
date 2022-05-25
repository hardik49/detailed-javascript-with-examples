var obj = {
  name: 'hardik',
  display: () => {
    console.log(this.name);
  },
}

var obj1 = {
  name: 'hardik-obj1'
}

obj.display(); // undefined
obj.display.call(obj1); // undefined



// Just converting it to arrow function it returns this as global object and not scope value
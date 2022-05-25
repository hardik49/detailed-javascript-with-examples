var obj = {
  name: 'hardik',
  display: () => {
    console.log(this.name);
  },
}

var obj1 = {
  name: 'hardik-obj1'
}

obj.display();
obj.display.call(obj1);

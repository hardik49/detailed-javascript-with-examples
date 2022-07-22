let paintColor = 'Red';

const paint = (() => {
  return {
    changeColorToBlue: () => {
      paintColor = 'Blue';
      return paintColor;
    },
    changeColorToGreen: () => {
      paintColor = 'Green';
      return paintColor;
    }
  }
})();

console.log(paintColor);

/* 
  It will print 'Red'. 
  The reason is paint is storing a function that changes a value of  
  paintColor variable. 
  Note: paint is a function but it is not called yet.
  So the value will remains 'Red'.

  In order to change it to 'Blue' we need to call a function with:
  paint.changeColorToBlue();
  Or to change it to 'Green' we need to call a function with:
  paint.changeColorToGreen();
*/

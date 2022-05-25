let x = true;

setTimeout(() => {
  x = false;
});

while (x) {
  console.log("Hello");
}

/* 
  Output 
  
  It keeps printing hello as x is true

  Because setTimeout will store in callback queue and after code execution is completes it will run
  But while is always true hence it will never give chance setTimeout to execute
*/
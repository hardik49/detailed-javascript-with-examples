console.log("a");
setTimeout(() => console.log("b"), 0);
Promise.resolve(() => console.log("c")).then((res) => res());
console.log("d")

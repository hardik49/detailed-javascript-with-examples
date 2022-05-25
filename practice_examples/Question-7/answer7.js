function curry(func) {
  return function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      }
    }
  }
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(4)); // 8
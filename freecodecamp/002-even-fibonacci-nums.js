function fiboEvenSum(n) {
  let fib = [0, 1, 1]
  let i = 3
  while (fib[fib.length - 1] <= n) {
    fib[i] = fib[i - 1] + fib[i - 2]
    i++
  }
  fib.splice(fib.length -1, 1)
  return fib.reduce((acc, curr) => curr % 2 === 0 ? acc += curr : acc, 0);
}


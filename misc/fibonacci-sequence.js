function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib
}

console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciSequence(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSequence(7)); // [0, 1, 1, 2, 3, 5, 8]
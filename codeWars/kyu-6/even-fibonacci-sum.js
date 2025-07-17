/*
    Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

    The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

    0 1 1 2 3 5 8 13 21...

    For example:

    fibonacci(0)==0
    fibonacci(33)==10
    fibonacci(25997544)==19544084
*/



/* My Solution => which is slower than turtle with big numbers */
function evenSumFibonnaci(max) {
    let fib = [0, 1];
    for (let i = 2; i < max; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.filter(num => num < max && num % 2 === 0).reduce((a, b) => a + b)
}


/* AI solution which is faster*/
function evenSumFibonnaci_AI(max) {
    let a = 0;
    let b = 1;
    let sum = 0;
    while (b < max) {
        if (b % 2 === 0) {
            sum += b;
        }
        let tempVar = a + b;
        a = b;
        b = tempVar;
    }
    return sum
}
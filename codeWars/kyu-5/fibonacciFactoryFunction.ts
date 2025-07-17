
function genFib() {
    let fibArray: number[] = [0, 1];
    let i: number = 0
    return () => {
        if (fibArray[i] !== undefined) {
            return fibArray[i++]
        }
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        return fibArray[i++]
    }
}

const fib = genFib();

fib() // 0
fib() // 1  
fib() // 1  
fib() // 2  
fib() // 3  
fib() // 5  
fib() // 8  
fib() // 13 
fib() // 21 
fib() // 34 
fib() // 55 
fib() // 89 
fib() // 144
fib() // 233
fib() // 377
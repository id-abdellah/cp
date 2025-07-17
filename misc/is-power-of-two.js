/*
    if the log2(n) is integer then n is power of two
    otherwise if it is float then n is not power of two
*/
function isPowerOfTwo(n) {
    if (n == 0) return false;
    if (Math.log2(n) % 1 == 0) {
        return true
    } else {
        return false
    }
    // return Number.isInteger(Math.log2(n))
}


/* --------------------------------------- */


function isPowerOfTwo_secondAlgo(n) {
    if (n == 0) return false;
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2;
    }
    return true
    /* big O => O(log n) : input size is reduced by halfe*/
}
console.log(isPowerOfTwo_secondAlgo(1)); // true
console.log(isPowerOfTwo_secondAlgo(2)); // true
console.log(isPowerOfTwo_secondAlgo(5)); // false
console.log(isPowerOfTwo_secondAlgo(16)); // true
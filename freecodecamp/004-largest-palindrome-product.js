function isPlindromic(n) {
  let toString = String(n)
  let reversed = toString.split().reverse().join()
  return toString === reversed
}

function largestPalindromeProduct(n) {
  let min = 10 ** (n - 1);
  let max = (10 ** n) - 1;
  let largest = 0;
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      let multiply = i * j
      if (isPlindromic(multiply)) {
        largest = Math.max(largest, multiply)
      }
    }
  }
  return largest
}

console.log(largestPalindromeProduct(2));

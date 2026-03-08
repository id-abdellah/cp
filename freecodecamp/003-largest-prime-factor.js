function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function largestPrimeFactor(number) {
  let largest = 0;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && isPrime(i)) {
      largest = i;
      number /= i; 
      i--;
    }
  }

  if (number > 1) {
    largest = number;
  }

  return largest;
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));


/* ======= is a square number ======= */

function isSquareNumber(number) {
  if (number < 0) {
    // Negative numbers cannot be square numbers
    return false;
  }

  var sqrt = Math.sqrt(number);

  // If the square root is an integer, then the number is a square number
  return sqrt === Math.floor(sqrt);
}

console.log(isSquareNumber(2)); // false
console.log(isSquareNumber(9)); // true
console.log(isSquareNumber(4)); // true



/* ======= give square root of a number ======= */

function giveSquareRoot(n) {
  let result = n ** (1 / 2);
  return result;
}

console.log(giveSquareRoot(64)); // 8
console.log(giveSquareRoot(144));  // 12
console.log(giveSquareRoot(9));  // 3

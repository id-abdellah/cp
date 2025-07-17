/* ======================================== Collatz Conjecture ======================================== */

/*
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1


#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
*/

let hotpo = function (n) {
  let counter = 0;
  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 2 !== 0) {
      n = 3 * n + 1;
    }
    counter++;
  }
  return counter;
};

console.log(hotpo(6)); // 8
console.log(hotpo(23)); // 15



/* ======================================== count Positives & sum Negatives ======================================== */

function countPositivesSumNegatives(input) {
  let countOfPositives = 0;
  let sumOfNegatives = 0;

  if (input == null || input.length == 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countOfPositives += 1;
    } else {
      sumOfNegatives += input[i];
    }
  }

  return [countOfPositives, sumOfNegatives];
}
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,])); // [8, -50]






/* ======================================== Expression metter ======================================== */
function expressionMatter(a, b, c) {
  /*
    + * ()
  
    - a + b + c
    - a * b * c
    - a + (b * c)
    - a * (b + c)
    - (a + b) * c
    - (a * b) + c
    
  */

  let x = [
    a + b + c,
    a * b * c,
    a + b * c,
    a * (b + c),
    (a + b) * c,
    a * b + c,
  ];
  return x
    .sort((a, b) => {
      return b - a;
    })
    .shift();
}

console.log(expressionMatter(1, 1, 1)); // 3
console.log(expressionMatter(1, 2, 3)); // 9
console.log(expressionMatter(5, 1, 9)); // 54

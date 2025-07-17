/*  ====================  Simple multiplication  ====================  */

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(3)); // 27
console.log(simpleMultiplication(1)); // 9
console.log(simpleMultiplication(9)); // 81


/*  ====================  Century from years  ====================  */

function century(year) {
  return Math.ceil(year / 100);
}
console.log(century(1950)); // 20
console.log(century(1450)); // 15
console.log(century(2050)); // 21



/*  ====================  is Divisible  ====================  */

function isDivisible(n, x, y) {
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(12, 2, 5)); // true
console.log(isDivisible(100, 5, 10)); // false


// solution two

function isDivisibleTwo(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}

// solution three

function isDivisibleThree(n, x, y) {
  return n % x == 0 && n % y == 0;
}



/*  ====================  DNA to RNA  ====================  */

function DNAtoRNA(dna) {
  let rna = dna
    .split('')
    .map(function (currentLetter) {
      return currentLetter === 'C'
        ? 'G'
        : currentLetter === 'G'
        ? 'C'
        : currentLetter === 'T'
        ? 'A'
        : currentLetter === 'A'
        ? 'U'
        : 'ther is no letter';
    })
    .join('');
  return rna;
}

console.log(DNAtoRNA('ACGTTA')); // UGCAAU

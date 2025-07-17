/* =================================== Twice as old =================================== */
// يعني قبل شحال من عام كان العمر ديال باك الضوبل ديال العمر ديالك
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(30, 10)); // 10
console.log(twiceAsOld(60, 27)); // 60





/* =================================== Grasshopper - Check for factor =================================== */
function checkForFactor(base, factor) {
  return base % factor == 0;
}

console.log(checkForFactor(10, 5)); // true
console.log(checkForFactor(10, 3)); // false
console.log(checkForFactor(19, 3)); // false






/* =================================== convert number to reversed array of digits =================================== */

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((n) => {
      return +n;
    });
}

console.log(digitize(12345)); // [5, 4, 3, 2, 1]





/* =================================== is it palindrome? =================================== */
function isPalindrome(x) {
  let reversedOne = [];
  for (let i = x.length - 1; i >= 0; i--) {
    reversedOne.push(x[i]);
  }
  return reversedOne.join('').toLowerCase() === x.toLowerCase();
}

console.log(isPalindrome('aba')); // true
console.log(isPalindrome('Aba')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('aBcba')); // false

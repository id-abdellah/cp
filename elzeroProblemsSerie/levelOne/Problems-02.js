/* ================ Even or Odd ================ */

function evenOrOdd(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}
console.log(evenOrOdd(8)); // even
console.log(evenOrOdd(3)); // odd




/* ================ reverse a string ================ */

function reversString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
  // return str.split('').reverse().join(''); // built-in functions
}
console.log(reversString('abcd')); // dcba




/* ================ Boolean To String ================ */

function booleanToString(b) {
  // return String(b);
  // return `${b}`;
  return b ? 'true' : 'false';
}

console.log(booleanToString(false)); // "false"

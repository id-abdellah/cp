/* ================ Remove the first and the last Character from string ================ */

function removeChar(str) {
  let x = str.split('');
  x.pop();
  x.shift();
  return x.join('');
  // return str.slice(1, -1);
}
console.log(removeChar('mohamed'));



/* ================ Repeat string n Times ================ */

function repeatStr(n, s) {
  //   return s.repeat(n);

  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(s);
  }
  return arr.join('');
}
console.log(repeatStr(20, 'x'));



/* ================ Remove Spaces ================ */

function removeSpaces(x) {
  // return x.split(' ').join('');
  return x
    .split(' ')
    .filter((a) => (a == ' ' ? '' : a))
    .join('');
}
console.log(removeSpaces('m o ha m e d '));

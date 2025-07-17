/* ================================ get Character from ASCII code ================================ */
function getChar(c) {
  return String.fromCharCode(c);
}
console.log(getChar(65)); // A
console.log(getChar(45)); // -
console.log(getChar(67)); // C






/* ================================ Get Nth even number ================================ */

function nthEven(n) {
  return n * 2 - 2;
}
console.log(nthEven(10)); // 18
console.log(nthEven(100)); // 198
console.log(nthEven(1298734)); // 2597466








/* ================================ Get between ================================ */
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(between(1, 5)); // [1, 2, 3, 4, 5]
console.log(between(1, 100)); // [1, 2, 3, 4, 5, ..., 100]

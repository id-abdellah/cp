/* =========================== What is the real floor =========================== */

function getRealFloor(n) {
  return n < 13 && n > 0 ? n - 1 : n > 13 ? n - 2 : n;
}
console.log(getRealFloor(1)); // 0
console.log(getRealFloor(0)); // 0
console.log(getRealFloor(5)); // 4
console.log(getRealFloor(15)); // 13





/* =========================== Calculate Average =========================== */
// average = the sum of array element / array length
function findAverage(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length || 0;
}
console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([5, 5, 2, 1])); // 3.25






/* =========================== make it negative =========================== */
function makeNegative(num) {
  return num < 0 ? num : -num;
}
console.log(makeNegative(1)); // -1
console.log(makeNegative(0)); // 0
console.log(makeNegative(-23)); // -23

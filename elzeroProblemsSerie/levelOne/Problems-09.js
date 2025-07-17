/* =========================== Counting Sheeps =========================== */

function countSheeps(arrayOfSheep) {
  let res = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      res++;
    }
  }
  return res;
  // return arrayOfSheep.filter(Boolean).length;
}
console.log(countSheeps([true, true, false, false, false, true, true])); // 4






/* =========================== squer(n) sum =========================== */

function squareSum(numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i] ** 2;
  }
  return res;
  // return numbers
  //   .map(function (a) {
  //     return a ** 2;
  //   })
  //   .reduce(function (a, b) {
  //     return a + b;
  //   }, 0)
}
console.log(squareSum([2, 3, 4])); // 4 + 9 + 16 = 29
console.log(squareSum([2, 4, 5, 9])); // 126







/* =========================== count odd numbers bellow n =========================== */
function oddCount(n) {
  return Math.floor(n / 2);
}
console.log(oddCount(15)); // 7 => 1, 3, 5, 7, 9, 11, 13
console.log(oddCount(10)); // 5 = 1, 3, 5, 7 ,9

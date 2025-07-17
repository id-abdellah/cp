/* ======================================= multiplication table for number ======================================= */
const multiTable = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(`${i} * ${n} = ${i * n}`);
  }
  return arr.join('\n');
};

console.log(multiTable(9));
/*
1 * 9 = 9
2 * 9 = 18
3 * 9 = 27
4 * 9 = 36
5 * 9 = 45
6 * 9 = 54
7 * 9 = 63
8 * 9 = 72
9 * 9 = 81
*/





/* ======================================= Do i get bonus ======================================= */
function bonusTime(salary, bonus) {
  // return bonus ? `£${salary * 10}` : '£' + salary;
  return `£${salary * (bonus ? 10 : 1)}`;
}
console.log(bonusTime(1000, true)); // £10000
console.log(bonusTime(78, false)); // £78






/* ======================================= count by x ======================================= */
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countBy(2, 5)); // [2, 4, 6, 8, 10]
console.log(countBy(3, 6)); // [3, 6, 9, 12 15, 18]

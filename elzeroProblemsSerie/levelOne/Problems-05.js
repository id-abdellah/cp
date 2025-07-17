/* ============ Keep Hydrated ============ */

// every 1 hour you drink 0.5 litre while cycling

function litres(time) {
  return Math.floor(time / 2);
}

console.log(litres(3)); // 1
console.log(litres(5)); // 2




/* ============ Reduce but grow ============ */

const grow = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

console.log(grow([1, 2, 6, 5, 3])); // 1 * 2 * 6 * 5 * 3




/* ============ Convert a number to string ============ */

const stringToNumber = function (str) {
  return +str;
  //   return Number(str)
};

console.log(stringToNumber('123')); // 123
console.log(stringToNumber('-20')); // -20

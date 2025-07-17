/* ========= Price of Mangoes ========= */

function mango(quantity, price) {
  let freeMangoes = quantity - quantity / 3;
  return Math.ceil(freeMangoes) * price;
  // return Math.ceil(quantity - quantity / 3) * price;
}
console.log(mango(7, 3)); // 15



/* ========= quarter of the year ========= */

const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
  return theQuarterIs;
  // return Math.ceil(month / 3);
};
console.log(quarterOf(2)); // 1
console.log(quarterOf(5)); // 2
console.log(quarterOf(9)); // 3
console.log(quarterOf(11)); // 4



/* ========= invert Values ========= */

function invert(array) {
  return array.map(function (e) {
    return -e;
  });
}

console.log(invert([1, 2, -2, -5, -23, 9])); // [-1, -2, 2, ,5, 23, -9]

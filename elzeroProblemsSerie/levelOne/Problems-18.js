/* ===================================== count the monkeys ===================================== */

function monkeyCount(n) {
  let resArr = [];
  for (let i = 0; i < n; i++) {
    resArr.push(i + 1);
  }
  return resArr;
}
console.log(monkeyCount(10)); // [1, 2, 3,4 ,5 ,6 ,7,8 ,9 ,10]
console.log(monkeyCount(1)); // [1]







/* ===================================== Sum two Strings ===================================== */
function sumStr(a, b) {
  return `${+a + +b}`;
  //   return (+a + +b).toString()
  //   return String(+a + +b)
}







/* ===================================== Parse nice int from char problem ===================================== */

function getAge(inputString) {
  //   return parseInt(inputString)
  //   return Number(inputString[0])
  //   return +inputString.split("").filter((a, b)=> {return b === 0})
  return +inputString[0];
}

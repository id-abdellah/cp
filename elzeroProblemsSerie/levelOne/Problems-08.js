/*
You were camping with your friends far away from home,
but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump;
};
console.log(zeroFuel(100, 25, 2)); // false
console.log(zeroFuel(100, 50, 2)); // true





/* ========================= is the string all uppercase ? ========================= */

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

console.log('A'.isUpperCase()); // true
console.log('Ab'.isUpperCase()); // false
console.log('ABCDEf'.isUpperCase()); // false





/* ========================= Basic mathematical operations ========================= */

function basicOp(operation, value1, value2) {
  if (operation == '+') {
    return value1 + value2;
  } else if (operation == '-') {
    return value1 - value2;
  } else if (operation == '*') {
    return value1 * value2;
  } else if (operation == '/') {
    return value1 / value2;
  }
  // switch (operation) {
  //   case '+':
  //     return value1 + value2;
  //   case '-':
  //     return value1 - value2;
  //   case '*':
  //     return value1 * value2;
  //   case '/':
  //     return value1 / value2;
  //   default:
  //     return 0;
  // }
}
console.log(basicOp('+', 10, 2)); // 12
console.log(basicOp('-', 10, 2)); // 8
console.log(basicOp('*', 10, 2)); // 20
console.log(basicOp('/', 10, 2)); // 5

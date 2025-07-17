/* ============================== Switch it Up ============================== */
function switchItUp(number) {
  // switch (number) {
  //   case 0:
  //     return 'Zero';
  //   case 1:
  //     return 'One';
  //   case 2:
  //     return 'Two';
  //   case 3:
  //     return 'Three';
  //   case 4:
  //     return 'Four';
  //   case 5:
  //     return 'Five';
  //   case 6:
  //     return 'Six';
  //   case 7:
  //     return 'Seven';
  //   case 8:
  //     return 'Eight';
  //   case 9:
  //     return 'Nine';
  // }
  let arr = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  return arr[number];
}
console.log(switchItUp(1)); // "one"
console.log(switchItUp(4)); // "four"
console.log(switchItUp(8)); // "eight"






/* ============================== Opposites Attract ============================== */
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 == 0 && flower2 % 2 != 0) ||
    (flower1 % 2 != 0 && flower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
  // return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(1, 2)); // true
console.log(lovefunc(2, 4)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false






/* ============================== Grasshopper - Terminal game move function ============================== */
function move(position, roll) {
  return roll * 2 + position;
}
console.log(move(0, 6)); // 12
console.log(move(2, 6)); // 14
console.log(move(3, 9)); // 21

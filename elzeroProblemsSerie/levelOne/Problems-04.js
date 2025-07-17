/* ========== remove exclamation marks ========== */

function removeExclamationMarks(s) {
  return s.split('').map(function (s) {return s === '!' ? '' : s;})
    .join('');

//   return s.split('!').join(''); // solution Two
  
}
console.log(removeExclamationMarks('hell!o!'));

// Solution Three

/*
function removeExclamationMarks(s) {
  let arr = s.split('');
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '!') {
      res += arr[i];
    }
  }
  return res;
}
*/



/* ========== find minimum and maximum value of a list ========== */

// solution One

let min = function (list) {
  let firstValue = list[0];
  for (i = 0; i < list.length; i++) {
    if (list[i] < firstValue) {
      firstValue = list[i];
    }
  }
  return firstValue;
};

let max = function (list) {
  let firstValue = list[0];
  for (i = 0; i < list.length; i++) {
    if (list[i] > firstValue) {
      firstValue = list[i];
    }
  }
  return firstValue;
};
console.log(min([1, 2, 3, 4, 5, 6, 7, 10, -12, -13]));
console.log(max([1, 2, 3, 4, 5, 100, 6, 7, 10, -12, -13]));


// solution Two

/*
let min = (list) => {
  return Math.min(...list);
};
let max = (list) => {
  return Math.max(...list);
};
*/

/* ============================= Sort and Star ============================= */

function twoSort(s) {
  let x = s.sort()[0];
  let xSplited = x.split('');
  let res = [];
  for (let i = 0; i < xSplited.length; i++) {
    res.push(
      !(xSplited[xSplited.length - 1] == xSplited[i])
        ? `${xSplited[i]}***`
        : `${xSplited[i]}`
    );
  }
  return res.join('');

  // return s.sort()[0].split('').join('***');
}

console.log(twoSort(['bitcoin','take','over','the','world','maybe','who','knows','perhaps',])); // b***i***t***c***o***i***n





/* ============================= reversed sequence =============================  */

const reverseSeq = (n) => {
  let x = [];
  for (let i = n; i > 0; i--) {
    x.push(i);
  }
  return x;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
console.log(reverseSeq(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reverseSeq(3)); // [3, 2, 1]


/*  */

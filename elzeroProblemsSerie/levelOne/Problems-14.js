/* =========================== make an abbr =========================== */
function abbrevName(name) {
  let nameSplited = name.split(' ');
  return `${nameSplited[0][0].toUpperCase()}.${nameSplited[1][0].toUpperCase()}`;
}
console.log(abbrevName('mohamed id-abdellah')); // M.I
console.log(abbrevName('apple company')); // A.C
console.log(abbrevName('hello bro')); // H.B









/* =========================== you only need one =========================== */
function check(a, x) {
  return a.includes(x);
  // return a.indexOf(x) > -1 ? true : false;
}
console.log(check([1, 2, 3, 4, 5, 6], 4)); // true
console.log(check([1, 2, 3, 4, 5, 6], 10)); // fales
console.log(check(['a', 'b', 'c', 'd'], 'e')); // fales
console.log(check(['a', 'b', 'c', 'd'], 'c')); // true

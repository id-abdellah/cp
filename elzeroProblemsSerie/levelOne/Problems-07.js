/* =============== how many times a letter repeated in str =============== */

function strCount(str, letter) {
  let occ = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      occ++;
    }
  }
  return occ;
}
console.log(strCount('heloooo', 'o')); // 4
console.log(strCount('mohamed', 'm')); // 2
console.log(strCount('aabbcccdddd', 'd')); // 4
console.log(strCount('', 'z')); // 0






/* =============== function which return time in milliseconds (hours, minutes, seconds) =============== */

function past(h, m, s) {
  let seconds = s * 1000;
  let minutes = m * 60 * 1000;
  let hours = h * 60 * 60 * 1000;
  return hours + minutes + seconds;
  // return (h * 3600 + m * 60 + s) * 1000;
}
console.log(past(2, 40, 20)); // 9620000 ms
console.log(past(0, 1, 1)); // 61000 ms




/* =============== toAlternatingCase [lowerCase => upperCase & upperCase => lowerCase] =============== */

String.prototype.toAlternatingCase = function () {
  let finaleString = '';
  let x = this.split('');
  for (i = 0; i < x.length; i++) {
    if (x[i] == x[i].toUpperCase()) {
      finaleString += x[i].toLowerCase();
    } else if (x[i] == x[i].toLowerCase()) {
      finaleString += x[i].toUpperCase();
    }
  }
  return finaleString;
};
console.log('aa BB CC dd'.toAlternatingCase());
console.log('HELLO WORLD'.toAlternatingCase());
console.log('hello WORLD'.toAlternatingCase());

/* =================================== Fake binary =================================== */

function fakeBin(x) {
  let result = '';
  for (let i = 0; i < x.length; i++) {
    result += x[i] >= 5 ? 1 : 0;
  }
  return result;
}

console.log(fakeBin('45385593107843568')); // 01011110001100111
console.log(fakeBin('509321967506747')); // 101000111101101





/* =================================== the falling speed of petals =================================== */
function sakuraFall(speed) {
  if (speed > 0) {
    return 400 / speed;
  } else {
    return 0;
  }
}

console.log(sakuraFall(5)); // 80
console.log(sakuraFall(10)); // 40
console.log(sakuraFall(100)); // 4





/* =================================== replace all vowels to exclamation mark =================================== */

function replaceVowels(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let result = '';

  for (let i = 0; i < s.length; i++) {
    result += vowels.includes(s[i]) ? '!' : s[i];
  }

  return result;
}

console.log(replaceVowels('aeiou'));
console.log(replaceVowels('HI'));
console.log(replaceVowels('ABCDE'));

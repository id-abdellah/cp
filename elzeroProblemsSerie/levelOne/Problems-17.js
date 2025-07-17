/* ============================ Array plus Array ============================ */

function arrayPlusArray(arr1, arr2) {
  //   Solution One

  let x = 0;
  let y = 0;

  for (let i = 0; i < arr1.length; i++) {
    x += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    y += arr2[j];
  }
  return x + y;

  //   Solution Two

  //   return arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b)

  //   solution Three

  //   return arr1.concat(arr2).reduce((a,b) => a + b)
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([100, 200, 412], [1, 90, 78])); // 881





/* ============================ if you can't sleep, just count sheep ============================ */

var countSheep = function (num) {
  let sheep = 'sheep...';
  let finalRes = '';
  for (let i = 1; i <= num; i++) {
    finalRes += `${i} ${sheep}`;
  }
  return finalRes;
};
console.log(countSheep(5)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...
console.log(countSheep(2)); // 1 sheep...2 sheep...
console.log(countSheep(7)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...





/* ============================ the feast of many beasts ============================ */
// قالك ان الحيوانات دايرين وليمة و كل حيوان جايب طبق ديال
// و كاينة قاعدة وحدة باش داك الطبق اتقبل فديك الوليمة وهي ان خاص السمية ديال الطبق تكون كتبدا باول حرف من اسم الحيوان و كتكمل باخر حرف من اسم الحيوان
function feast(beast, dish) {
  if (dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1])) {
    return true;
  } else {
    return false;
  }
}
console.log(feast('great blue heron', 'garlic naan')); // true
console.log(feast('chickadee', 'chocolate cake')); // true

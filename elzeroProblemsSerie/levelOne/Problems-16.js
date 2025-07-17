/*
let arr = [2, 3, 10, 30, 23, -2, -100, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // [-100, -2, 1, 2, 3, 10, 23, 30]
*/



/* ================================== Sum of differences in array ================================== */
/* 
دبا فهاد الفانكشن طالبين انك تشد المصفوفة وترتبها عكسيا اي من الكبير للصغير
من بعد غتشد العنصر اللول منها و تنقص منو العنصر الثاني زائد العنصر الثاني ناقص العنصر الثالث ونتا غادي
*/
function sumOfDifferences(arr) {
  let result = 0;
  let arrSorted = arr
    .sort((a, b) => {
      return a - b;
    })
    .reverse();

  if (arr.length <= 1) {
    return 0;
  } else {
    for (let i = 0; i < arrSorted.length - 1; i++) {
      // درنا اللينث ناقص واحد حيت مغنخدموش بالدورة اللخرة. اي مغنوصلوش للعنصر اللخر
      result += arrSorted[i] - arrSorted[i + 1];
    }
  }
  return result;
  /* ------------- solution Two */
  // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

  /* ------------- solution three */
  /*
  return arr.sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);
  */
}
console.log(sumOfDifferences([2, 1, 9]));
console.log(sumOfDifferences([20, 2, 10]));





/* =============================================================================== */

/* Grasshopper - messi goals fuction */
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


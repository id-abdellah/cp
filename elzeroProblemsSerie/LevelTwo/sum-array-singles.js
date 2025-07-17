/*
    DESCRIPTION
    In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

    For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/

function repeats(arr) {
    let frequencyObject = {};
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (frequencyObject[currentNum]) {
            frequencyObject[currentNum]++
        } else {
            frequencyObject[currentNum] = 1;
        }
    }
    /* another solution */
    // let sumOfArraySingles = Object.entries(frequencyObject)
    //     .filter(entry => entry[1] === 1)
    //     .reduce((acc, currentArr) => acc += +currentArr[0], 0);
    let sumOfArraySingles = 0;
    for (let property in frequencyObject) {
        sumOfArraySingles += frequencyObject[property] === 1 ? +property : 0
    }
    return sumOfArraySingles

    /* clever solution */
    // return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
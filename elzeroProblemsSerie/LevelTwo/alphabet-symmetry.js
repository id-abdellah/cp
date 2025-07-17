/*
    DESCRIPTION

    Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

    Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

    Example
    solve(["abode","ABc","xyzD"]) = [4, 3, 1]
*/

function alphabetSymmetry(arr) {
    const LETTERS = "abcdefghijklmnopqrstuvwxyz";
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        const currentString = arr[i].toLowerCase();
        let count = 0;
        for (let i = 0; i < currentString.length; i++) {
            if (currentString[i] === LETTERS[i]) {
                count++
            }
        }
        nums.push(count)
    }
    return nums
}

console.log(alphabetSymmetry(["abode", "ABc", "xyzD"])); // [4, 3, 1]
console.log(alphabetSymmetry(["abide", "ABc", "xyz"])); // [4, 3, 0]
console.log(alphabetSymmetry(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6, 5, 7]
console.log(alphabetSymmetry(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]




/* =========================== Clever solutions =========================== */

function secondSolution(arr) {
    var LETTERS = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(currentString => {
        return currentString.toLowerCase().split("")
            .filter((currentLetter, index) => {
                return currentLetter === LETTERS[index]
            }).length
    })
};
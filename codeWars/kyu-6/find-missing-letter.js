/*
    DESCRIPTION

    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

    Example:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'
    (Use the English alphabet with 26 letters!)
*/

function findMissingLetter(array) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const isItLowerCase = array.join("").toLowerCase() === array.join("");
    const infos = {
        givenSequence: array.join("").toLowerCase(),
        start: alphabets.indexOf(array[0].toLowerCase()),
        end: alphabets.indexOf(array[array.length - 1].toLowerCase())
    };
    infos.realSequence = alphabets.slice(infos.start, infos.end + 1);
    let missingOne = infos.realSequence[infos.realSequence.split("").findIndex((l) => !infos.givenSequence.includes(l))]
    return isItLowerCase ? missingOne.toLowerCase() : missingOne.toUpperCase()
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // e
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // P
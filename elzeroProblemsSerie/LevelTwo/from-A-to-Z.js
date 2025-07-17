/*
    DESCRIPTION

    Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
    Note that if the range is given in capital letters, return the string in capitals also!

    Examples
    "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
    "h-o" ➞ "hijklmno"
    "Q-Z" ➞ "QRSTUVWXYZ"
    "J-J" ➞ "J"

    Notes
        - A hyphen will separate the two letters in the string.
        - You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
*/
function gimmeTheLetters(sp) {
    const LETTERS = "abcdefghijklmnopqrstuvwxyz";
    let startIndex = LETTERS.indexOf(sp.split("-")[0].toLowerCase());
    let endIndex = LETTERS.indexOf(sp.split("-")[1].toLowerCase());
    let rangeArray = LETTERS.split("").filter((letter, index) => {
        return index >= startIndex && index <= endIndex
    }).join("");
    return sp.split("-").join("").toUpperCase() === sp.split("-").join("")
        ?
        rangeArray.toUpperCase()
        :
        rangeArray
}

console.log(gimmeTheLetters("h-o")); // hijklmno
console.log(gimmeTheLetters("H-O")); // HIJKLMNO
console.log(gimmeTheLetters("g-i")); // ghi
console.log(gimmeTheLetters("J-J")); // J
console.log(gimmeTheLetters("c-p")); // cdefghijklmnop
/*
    If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

    Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

    For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

    Examples
    numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
    numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/

function numbersOfLetters(integer) {
    // My humble solution :D
    // initializing the numbers
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: ["ten", "onezero"],
        11: ["eleven", "oneone"],
        12: ["twelve", "onetwo"],
        13: ["thirteen", "onethree"],
        14: ["fourteen", "onefour"],
        15: ["fifteen", "onefive"]
    }
    // integer to string
    let intToStr = String(integer);
    // the main array
    let arr = [];
    // pushing the first element
    arr.push(
        intToStr.length === 3
            ?
            `${numbers[intToStr[0]]}${numbers[intToStr[1]]}${numbers[intToStr[2]]}`
            :
            intToStr.length === 2
                ?
                `${numbers[intToStr[0]]}${numbers[intToStr[1]]}`
                :
                `${numbers[intToStr]}`
    )
    // pushing rest elements
    let lastWord = arr[arr.length - 1];
    let nextWord = numbers[lastWord.length];
    while (nextWord !== lastWord) {
        arr.push(lastWord.length >= 10 ? nextWord[1] : nextWord);
        lastWord = arr[arr.length - 1];
        nextWord = numbers[lastWord.length];
    }
    return arr;
}

console.log(numbersOfLetters(999)); // ['nineninenine', 'onetwo', 'six', 'three', 'five', 'four']
console.log(numbersOfLetters(3)); // ['three', 'five', 'four']
console.log(numbersOfLetters(99)); // ['ninenine', 'eight', 'five', 'four']
console.log(numbersOfLetters(37)); // ['threeseven', 'onezero', 'seven', 'five', 'four']


/*
    someone clever solution
*/

function numbersOfLetters2(integer) {
    var hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var result = [];

    var text = 'q'.repeat(integer);

    do {
        text = (text.length + '').split('').map(number => hash[number]).join('');
        result.push(text);
    } while (text != hash[text.length]);

    return result;
}
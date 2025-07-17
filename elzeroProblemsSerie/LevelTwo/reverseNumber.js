/*
    DESCRIPTION

    Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

    Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

    Examples
    123 ->  321
    -456 -> -654
    1000 ->    1
*/

function reverseNumber(n) {
    let nToNum = (n + "");
    let x = "";
    for (let i = nToNum.length - 1; i >= 0; i--) {
        if (nToNum[i] !== "-") {
            x += nToNum[i]
        } else {
            x = "-" + x
        }
    }
    return +x
}

console.log(reverseNumber(123))
console.log(reverseNumber(-12345))
console.log(reverseNumber(4000))
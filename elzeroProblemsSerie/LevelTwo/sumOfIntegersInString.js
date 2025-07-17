/*
    DESCRIPTION

    Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

    Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
    let onlyNums = [];
    let temp = "";
    for (let i = 0; i < s.length + 1; i++) {
        if (!isNaN(s[i])) {
            temp += s[i];
        } else {
            onlyNums.push(temp)
            temp = "";
        }
    }
    return onlyNums.reduce((acc, x) => acc += +x, 0);
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy"))
console.log(sumOfIntegersInString("12d4"))
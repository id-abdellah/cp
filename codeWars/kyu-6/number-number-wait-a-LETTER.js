/*
DESCRIPTION:

Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.

This has to work for any size of numbers sent in (after division, go back to addition, etc).
In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.

Remember to also round the final answer to the nearest integer.

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

Good luck and may the CODE be with you!
*/

function doMath(str) {
    // This solution may be the worst solution you may see in your life :)
    // Part 1: is about making the array free of letters and arranging them
    let strSplited = str.split(" ");
    let lettersOnlySorted = str.split("").filter(char => isNaN(char)).sort();
    let strSorted = [];
    for (let i = 0; i < lettersOnlySorted.length; i++) {
        let letter = lettersOnlySorted[i];
        for (let j = 0; j < strSplited.length; j++) {
            if (strSplited[j].includes(letter)) {
                if (strSorted.includes(strSplited[j])) continue
                strSorted.push(strSplited[j])
            } else {
                continue
            }
        }
    }
    let finalDestination = strSorted.join(" ").split("").filter(char => char === " " || !isNaN(char)).join("").split(" ").map(a => +a);
    // Part 2: is about putting each mathematical operation into place
    let operations = "+-*/";
    let operationsPointer = 0;
    let stack = [];
    while (finalDestination.length !== 0) {
        if (operationsPointer === 4) {
            operationsPointer = 0;
        }
        stack.push(finalDestination[0])
        if (finalDestination.length !== 1) {
            stack.push(operations[operationsPointer])
        }
        operationsPointer++;
        finalDestination.shift()
    }
    // Part 3: is about applying mathematical operations between numbers to come up with the desired solution
    let finalArr = [];
    for (let i = 0; i < stack.length; i++) {
        finalArr.push(stack[i]);
        if (finalArr.length === 3) {
            let a = finalArr[0];
            let operation = finalArr[1];
            let b = finalArr[2];
            switch (operation) {
                case ("+"):
                    finalArr = [a + b]
                    break;
                case ("-"):
                    finalArr = [a - b]
                    break;
                case ("*"):
                    finalArr = [a * b]
                    break;
                case ("/"):
                    finalArr = [a / b]
                    break;
            }
        }
    }
    return Math.round(+finalArr)
}

console.log(doMath("10a 90x 14b 78u 45a 7b 34y"));
// 10 45 14 7 78 90 34
// 10 + 45 - 14 * 7 / 78 + 90 - 34
// 60
/*
    Write a function that receives an integer of type integer. The function adds the odd and even numbers that make up the integer. If the sum of the odd numbers is greater than the sum of the even numbers, return the value odd. If the sum of the even numbers is greater than the sum of the odd numbers, return even. If the sum of the odd numbers is Equals the sum of even numbers. Return equal
*/


function oddsVsEvens(num) {
    let numToArray = String(num);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numToArray.length; i++) {
        let currentNumberElement = Number(numToArray[i]);
        if (currentNumberElement % 2 == 0) {
            evenSum += currentNumberElement;
        } else {
            oddSum += currentNumberElement;
        }
    }
    return oddSum > evenSum ? "odd" : oddSum < evenSum ? "even" : "equal"
}

console.log(oddsVsEvens(97428)); // "odd"
console.log(oddsVsEvens(81961)); // "even"
console.log(oddsVsEvens(54870)); // "equal"
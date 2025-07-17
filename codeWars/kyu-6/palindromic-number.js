/* 
    ------------------ Description ----------------- 

Palindromic Numbers
A palindromic number is a number that remains the same when its digits are reversed. Like 16461, for example, it is "symmetrical".

Non-palindromic numbers can be paired with palindromic ones via a series of operations. First, the non-palindromic number is reversed and the result is added to the original number. If the result is not a palindromic number, this is repeated until it gives a palindromic number.

Lychrel Numbers
It is not known whether all non-palindromic numbers can be paired with palindromic numbers in this way. While no number has been proven to be unpaired, many do not appear to be. For example, 196 does not yield a palindrome even after 700,000,000 iterations. Any number that never becomes palindromic in this way is known as a Lychrel number.

This Kata is about actually finding a palindromic number out of an original seed.

You will be given a number as input and in the output you must return a string containing the number of iterations (i.e. additions) you had to perform to reach the palindromic result and the palindromic number itself, separated by a space. In Haskell return a tuple (Int, Integer).

palindromize(195) == 4 9339
palindromize(265) == 5 45254
palindromize(750) == 3 6666

*/

function palindromize(number) {

    let numberOfIterations = 0;

    let initialValue = number;

    while (initialValue != Number(initialValue.toString().split("").reverse().join(""))) {

        initialValue += +initialValue.toString().split("").reverse().join("");

        numberOfIterations++
    }

    return `${numberOfIterations} ${initialValue}`
}

console.log(palindromize(238)); // 2, 1771
console.log(palindromize(872)); // 2, 1661
console.log(palindromize(192)); // 4 6996
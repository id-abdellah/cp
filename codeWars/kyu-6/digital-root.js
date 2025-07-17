/*
    DESCRIPTION

    Digital root is the recursive sum of all the digits in a number.

    Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    Examples
    16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
    let result;
    let isDone = false;
    while (!isDone) {
        n = (n + "").split("").map(n => +n).reduce((acc, n) => acc += n, 0);
        result = n;
        if ((n + "").length < 2) {
            isDone = true;
        }
    }
    return result

    // Recursion soluction
    if (n < 10) return n;
    return digitalRoot((n + "").split("").map(n => +n).reduce((acc, n) => acc += n, 0))

    // Mathematic solution
    return (n - 1) % 9 + 1
}

console.log(digitalRoot(493193))
console.log(digitalRoot(132189))
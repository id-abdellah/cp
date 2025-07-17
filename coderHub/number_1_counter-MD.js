/*
    Write a function that receives an integer of type. The function converts the entered integer to a binary number and then counts the number of occurrences of the number 1. ** The results of the function are of type integer.
*/

function count_ones(num) {
    let numConverted = num.toString(2);
    let counter = 0;
    for (let i = 0; i < numConverted.length; i++) {
        if (numConverted[i] == "1") {
            counter += 1;
        }
    }
    return counter
}

console.log(count_ones(100)); // 3
console.log(count_ones(65)); // 2
console.log(count_ones(888)); // 6
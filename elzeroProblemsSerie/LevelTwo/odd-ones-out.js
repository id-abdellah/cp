/*
    DESCRIPTION

    Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

    oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
    In the above example:

    the number 1 appears twice
    the number 2 appears once
    the number 3 appears three times
    2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

    Here are more examples:

    oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
    oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
    oddOnesOut([1, 2, 3]) = []
    oddOnesOut([1]) = []
*/

function oddOnesOut(nums) {
    let frequencyObj = {};
    nums.forEach(num => {
        if (frequencyObj[num]) {
            frequencyObj[num]++
        } else {
            frequencyObj[num] = 1;
        }
    })
    return nums.filter(num => frequencyObj[num] % 2 === 0)
}

console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26])); // [26, 24, 24, 26]
console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3])); // [1, 1, 2, 2]
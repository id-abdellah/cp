/*
    DESCRIPTION

    Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

    
    Example

    input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
    ouptut: 5 

    The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
    /* First Solution */
    if (!collection.length) return 0
    let frequentObj = {};
    for (let num of collection) {
        if (num in frequentObj) {
            frequentObj[num]++
        } else {
            frequentObj[num] = 1
        }
    }
    return Object.values(frequentObj).sort((a, b) => b - a)[0]

    /* Second solution */
    // let result = 0;
    // for (let i = 0; i < collection.length; i++) {
    //     let currentItem = collection[i];
    //     let count = 0;
    //     for (let i = 0; i < collection.length; i++) {
    //         if (currentItem === collection[i]) {
    //             count++
    //         }
    //     }
    //     if (count > result) {
    //         result = count
    //     }
    // }
    // return result
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])); // -1 * 5 => input: 5
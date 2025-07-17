/*
    DESCRIPTION

    You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

function partyOutlier(integers) {
    let stateObj = {
        odd: [],
        even: []
    };
    for (let i = 0; i < integers.length; i++) {
        stateObj[integers[i] % 2 ? "odd" : "even"].push(i)
    }
    const oultier = integers[Object.values(stateObj).filter(arr => arr.length == 1).flat()];
    return oultier

    // Unreachable code
    // second solution
    let evens = integers.filter(n => n % 2 == true);
    let odds = integers.filter(n => n % 2 != true);
    return evens.length === 1 ? evens[0] : odds[0]
}

console.log(partyOutlier([2, 6, 8, 10, 3])); // 3
console.log(partyOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(partyOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
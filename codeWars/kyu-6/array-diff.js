/*
    DESCRIPTION

    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

    It should remove all values from list a, which are present in list b keeping their order.

    arrayDiff([1,2],[1]) == [2]
    If a value is present in b, all of its occurrences must be removed from the other:

    arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    if (b.length === 0) return a;
    let diff = [];
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i]) && !diff.includes(b[i])) {
            diff.push(b[i])
        }
    }
    let result = a.filter(num => !diff.includes(num));
    return result

    // Unreachable code
    return a.filter(num => !b.includes(num))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
console.log(arrayDiff([1, 2, 3], [1, 2]))
/*
    DESCRIPTION

    In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
    The first element of the array is at index 0.
*/
function total(arr) {
    function isPrimeNumber(n) {
        if (n <= 1) return false
        if (n === 2) return true
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false
        }
        return true
    }
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrimeNumber(i)) {
            nums.push(arr[i])
        }
    }
    return nums.reduce((acc, n) => acc += n, 0)
};

console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 33

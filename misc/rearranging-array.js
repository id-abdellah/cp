/**
 * rearranging an array without creating a copy of it
*/

let arr = [2, 3, 9, 12, 13, 89, 21, 30, 4, 6, 7, 91, 76];
let arr2 = [1, 2, 3, 5, 6, 7, 8, 9];

function rearrangingArray(arr) {
    let tracker = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // [arr[i], arr[tracker]] = [arr[tracker], arr[i]];
            let stash = arr[i];
            arr[i] = arr[tracker];
            arr[tracker] = stash;
            tracker++
        }
    }
    return arr
}

console.log(rearrangingArray(arr)); // [2, 12, 30, 4, 6, 76, 21, 9, 3, 13, 7, 91, 89]
console.log(rearrangingArray(arr2)); // [2, 6, 8, 5, 1, 7, 3, 9]
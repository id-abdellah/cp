/*
    Write a function that receives two integer arrays. The function subtracts the elements in the first array from the elements in the second array, then returns an integer array.
*/

function sub_arrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr2[i] - arr1[i])
    }
    return result
}


/*
    arr1 = [1, 2, 3];
    arr2 = [4, 5, 9];

    result: [4 - 1, 5 - 2, 9 - 3]
            [3, 3, 6]
*/
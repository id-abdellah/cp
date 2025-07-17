let arr = [1, 2, 3, 2, 3, 4, 5, 5, 6, 1, 1, 4, 5, 7, 8, 8, 'a', 'a', 'c', 'C'];


/* ________________Approach 01 => for loop method________________ */

let objCount = {};

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (objCount[element]) {
        objCount[element] += 1;
    } else {
        objCount[element] = 1;
    }
}

console.log(objCount);
/*
    {
        "1": 3
        "2": 2
        "3": 2
        "4": 2
        "5": 3
        "6": 1
        "7": 1
        "8": 2
        "C": 1
        "a": 2
        "c": 1
    }
*/




/* ________________Approach 02 filter method________________ */

function count(arr, element) {
    return arr.filter((ele) => ele == element).length;
}
console.log(count(arr, 5)); // 3





/* ________________Approach 03 => reduce method________________ */

function count(arr, element) {
    return arr.reduce((ele, arrayEle) =>
        (arrayEle == element ? ele + 1 : ele), 0);
};
console.log(count(arr, 1)); // 3
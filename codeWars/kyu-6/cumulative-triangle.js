function cumulativeTriangle(n) {
    let arr = []

    let num = 0;

    for (let i = 1; i < 10000; i++) {
        let tempArr = [];
        for (let j = 0; j < i; j++) {
            num++
            tempArr.push(num)
        }
        arr.push(tempArr)
    }

    let wantedArray = arr[n - 1];
    let sum = wantedArray.reduce((a, b) => {
        if (b) {
            return a + b
        } else {
            0
        }
    }, 0);

    return sum
}

/*
          1
         2 3
        4 5 6
       7 8 9 10
    11 12 13 14 15

give the sum of numbers in n row
*/
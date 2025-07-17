/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

    Examples
    # N = 4
    1 + 2 + 3 + 4 = 10

    # N = 10
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

    # N = 12
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

function twistedSum(n) {
    let alone = [];
    // let dual = [];
    for (let i = 1; i <= n; i++) {
        if (i < 10) {
            alone.push(i)
        } else if (i >= 10) {
            let nToString = (i + "");
            let tempArr = []
            nToString.split("").forEach(num => tempArr.push(+num))
            alone.push(tempArr)
        }
    }

    let sum = alone.flat(1).reduce((a, b) => {
        return a + b
    });

    return sum
}
console.log(twistedSum(4)); // 10
console.log(twistedSum(10)); // 46
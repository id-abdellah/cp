/*
Task:

Given a list of integers l, return the list with each value multiplied by integer n.


Restrictions:

The code must not:
    contain *.
    use eval() or exec()
    contain for
    modify l
*/

function multiply(n, l) {
    let result = [];

    let i = 0;
    while (i < l.length) {
        const currentNum = l[i];

        let a = 0;
        let j = 0;
        while (j < Math.abs(n)) {
            a += currentNum;
            j++;
        }
        result.push(a)
        i++
    }

    return result
}
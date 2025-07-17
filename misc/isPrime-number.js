/*
    هو الرقم لي كيقبل القسمة فقط على نفسو و على واحد square root number ال
*/

function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

/*
    But, There is an optimal solution

    Integers larger than the square root do not need to be checked
    Because whenever " n = a * b " one of the two factors "a" and "b" is less than or equal to the square root of "n"
*/

function isPrimeNumber_optimal(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
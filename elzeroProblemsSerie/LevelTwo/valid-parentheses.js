/*
    DESCRIPTION

    Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    Constraints
    0 <= length of input <= 100
    All inputs will be strings, consisting only of characters ( and ).
    Empty strings are considered balanced (and therefore valid), and will be tested.
    For languages with mutable strings, the inputs should not be mutated.

    Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!
*/

function validParentheses(parenStr) {
    let stack = [];
    for (let i = 0; i < parenStr.length; i++) {
        // if the element is open parenthese push it to the stack
        if (parenStr[i] === "(") stack.push(parenStr[i])
        // if the element is close parenthese
        if (parenStr[i] === ")") {
            // if stack is empty retun false
            if (stack.length === 0) return false
            // if the last element is not open parenthese return false
            let top = stack.pop()
            if (top === parenStr[i]) return false
        }
    }
    // if the stack is not empty return false
    if (stack.length !== 0) return false
    // otherwise, return tru
    return true
}

console.log(validParentheses("(())((()())())")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("())(()")); // false
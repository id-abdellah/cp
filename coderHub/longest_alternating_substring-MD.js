/*

    Write a function that receives a string value. 
    This function finds the longest substring alternating between odd and even numbers. 
    This means that the series must be composed of an even number followed by an odd number. 
    This does not require that the series begin with an even number. 
    It is possible to start with an even or odd number.

*/


function longestAlternatingSubstring(digits) {
    let finalFubstrings = [];
    let subs = "";
    for (let i = 0; i < digits.length; i++) {
        let currentDigit = +digits[i];
        let nextDigit = +digits[i + 1];

        if (currentDigit % 2 != nextDigit % 2) {
            subs += currentDigit;
        } else {
            subs += currentDigit;
            finalFubstrings.push(subs)
            subs = "";
        }
    }

    let maxSubstringLength = Math.max(...finalFubstrings.map(element => {
        return element.length
    }));

    let findingLongestSubstring = finalFubstrings.find(e => {
        return e.length == maxSubstringLength
    });

    return findingLongestSubstring
}

console.log(longestAlternatingSubstring('2105787220351146')); // 2105
console.log(longestAlternatingSubstring('1263654081858902')); // 8185890
console.log(longestAlternatingSubstring('334090830025543'));// 090
/*
    DESCRIPTION

    Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

    For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

    The input will be a lowercase string with no spaces.
*/

function capitalize(s) {
    let evenCapitalization = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()).join("");
    let oddCapitalazation = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l.toLowerCase()).join("");
    return [evenCapitalization, oddCapitalazation]
};

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))
console.log(capitalize("abracadabra"))
console.log(capitalize("codewarriors"))
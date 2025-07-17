/*
    Description

    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/

function breakCamelCase(string) {
    let a = string.split(/[A-Z]/g);
    let b = string.match(/[A-Z]/g);

    let breaked = "";

    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            breaked += a[i];
        } else {
            breaked += ` ${b[i - 1]}${a[i]}`
        }
    }

    return breaked

    // best solution i have seen
    // return (string.replace(/([A-Z])/g, ' $1'));
}

console.log(breakCamelCase("camelCaseIsHere")); // camel Case Is Here
console.log(breakCamelCase("pleaseMake")); // please Make
console.log(breakCamelCase("thinkSeemHave")); // think Seem Have
console.log(breakCamelCase("")); // ""
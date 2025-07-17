/*
    DESCRIPTION

    Write Number in Expanded Form
    You will be given a number and you will need to return it as a string in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
    
    NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let expandedForm = "";
    let toString = num + "";
    let start = 1;
    for (let i = toString.length - 1; i >= 0; i--) {
        if (toString[i] !== "0") {
            expandedForm += +toString[i] * start + " + ";
        }
        start = start * 10;
    }
    return expandedForm.split(" ").reverse().join(" ").trim().slice(2)
}

console.log(expandedForm(8)); // 8
console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(150329)); // 100000 + 50000 + 300 + 20 + 9
console.log(expandedForm(1503229)); // 1000000 + 500000 + 3000 + 200 + 20 + 9
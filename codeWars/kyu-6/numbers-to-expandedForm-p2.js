/*
    DESCRIPTION

    This kata is the second part of "numbers to expanded form" kata.
    
    example:
    expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
    expanded_from(1.24); // should return "1 + 2/10 + 4/100"
    expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
    expanded_from(0.04); // should return "4/100"
*/

function expandedFormPartOne(num) {
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

function expandedForm(num) {
    const integralPart = +(num + "").split(".")[0];
    const fractionalPart = (num + "").split(".")[1];

    const integralPartExpandedForm = expandedFormPartOne(integralPart);

    let start = 10;
    let fractionalPartExpandedForm = "";
    for (let i = 0; i < fractionalPart.length; i++) {
        if (fractionalPart[i] !== "0") {
            fractionalPartExpandedForm += `${fractionalPart[i]}/${start}` + (i === fractionalPart.length - 1 ? "" : " + ")
        }
        start *= 10;
    }
    return `${integralPartExpandedForm === "" ? "" : integralPartExpandedForm + " + "}${fractionalPartExpandedForm.trim()}`.trim()
}

console.log(expandedForm(807.304)); // 800 + 7 + 3/10 + 4/1000
console.log(expandedForm(0.65)); // 6/10 + 5/100
console.log(expandedForm(18.3049)); // 10 + 8 + 3/10 + 4/1000 + 9/10000
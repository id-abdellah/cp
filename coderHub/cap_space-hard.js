/*
    Write a function that receives a text value of type string. The function separates words when observing an uppercase letter by placing a space and converting it to a lowercase letter, then returns the result of type string.
*/


function cap_space(txt) {
    let txtSplited = [];
    let eachWord = "";
    for (let i = 0; i < txt.length; i++) {

        if (txt[i] == txt[i].toLowerCase()) {
            eachWord += txt[i];
        } else if (txt[i] == txt[i].toUpperCase()) {
            txtSplited.push(eachWord)
            eachWord = txt[i];
        }

        if (i == txt.length - 1) {
            txtSplited.push(eachWord)
            eachWord = "";
        }
    }
    let everyWordToLowerCase = txtSplited.map(element => {
        return element.slice(0, 1).toLowerCase() + element.slice(1)
    });
    return everyWordToLowerCase.join(" ")
}

console.log(cap_space("wePlayTennis")); // we play tennis
console.log(cap_space("iLikeCats"));    // i like cats
console.log(cap_space("computerScience")); // computer science
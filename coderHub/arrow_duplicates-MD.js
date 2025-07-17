/*

Write a function that receives a variable of type string consisting of letters. The function replaces the letters with one of the symbols (>) and (<) so that if the letter is repeated in the word, it turns into <, and if the letter is not repeated, it turns into >

*/

function arrowDuplicates(word) {
    let wordLowerCase = word.toLowerCase();
    let fObject = {};
    for (let i = 0; i < wordLowerCase.length; i++) {
        let element = wordLowerCase[i];
        if (fObject[element]) {
            fObject[element] += 1;
        } else {
            fObject[element] = 1;
        }
    }
    let finalResult = "";
    for (let i = 0; i < wordLowerCase.length; i++) {
        if (fObject[wordLowerCase[i]] > 1) {
            finalResult += "<";
        } else {
            finalResult += ">";
        }
    }
    return finalResult
}

arrowDuplicates("mohamed"); // '<>>><>>'
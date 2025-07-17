/*

Description......

You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

*/

function proofread(str) {
    let strCapitalized = str.split(" ").map((word, index, arr) => {
        if (index === 0 || arr[index - 1][arr[index - 1].length - 1] === ".") {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        } else {
            return word.toLowerCase()
        }
    }).map((word, index, arr) => {
        if (word.toLowerCase().includes("ie")) {
            let iIndex = word.indexOf("ie");
            let eIndex = iIndex + 1;

            let letterBeforeI = word.slice(0, iIndex);
            let letterAfterE = word.slice(eIndex + 1);

            let finaleWord = `${letterBeforeI}ei${letterAfterE}`;

            return finaleWord
        }
        return word
    }).join(" ");

    return strCapitalized

    // RegEx solution
    /*
        return str.toLowerCase()
            .replace(/ie/g, "ei") 
            .replace(/(^|\. )(.)/g, (_, a, b) => a + b.toUpperCase())
    */
}
/*
    DESCRIPION

    Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

    Example (Input --> Output)

    "drake" --> "drk"
    "aeiou" --> ""

    remove_vowels("drake") // => "drk"
    remove_vowels("aeiou") // => ""
*/

var removeVowels = function (str) {
    let vowels = "aeiou";
    return str.split("").map(l => {
        if (!vowels.includes(l)) {
            return l
        }
    }).join("")
}
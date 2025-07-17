function first_n_vowels(phrase, n) {
    let vowels = "aeiou";
    let vowels_in_phrase = [];
    for (let i = 0; i < phrase.length; i++) {
        if (vowels.includes(phrase[i].toLowerCase())) {
            vowels_in_phrase.push(phrase[i]);
        }
    }
    if (n > vowels_in_phrase.length || n < 0) return "invalid";

    vowels_in_phrase.length = n;
    return vowels_in_phrase.join("");
}

first_n_vowels("Queen", 3); // uee
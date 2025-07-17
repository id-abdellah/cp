/*
    ---------------- Description ----------------

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.



Examples :
    - " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    - "    Hello     World   "                  =>  "#HelloWorld"
    - ""                                        =>  false
*/



function generateHashtag(str) {
    if (str == 0) return false;
    let final_StingTrimed = [];
    let strTrimed = str.trim().split(' ').map((word) => {
        if (word != 0) {
            final_StingTrimed.push(word);
        }
    });

    final_StingTrimed_firstLetterUppercase = final_StingTrimed.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    final_StingTrimed_firstLetterUppercase.unshift('#');

    if (final_StingTrimed_firstLetterUppercase.join('').length > 140) {
        return false;
    } else {
        return final_StingTrimed_firstLetterUppercase.join('');
    }
}

console.log(generateHashtag('   hello   mohamed          world   ')); //  #HelloMohamedWorld
console.log(generateHashtag('Hello there thanks for trying my Kata')); // #HelloThereThanksForTryingMyKata
console.log(generateHashtag('')); // false

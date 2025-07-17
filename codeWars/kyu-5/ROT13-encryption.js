/*
    -------------- Description --------------

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message) {
    let normalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let rot13Encryption = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

    let userMessageEncrypted = [];

    for (let i = 0; i < normalLetters.length; i++) {
        if (normalLetters.includes(message[i])) {
            userMessageEncrypted.push(rot13Encryption[normalLetters.indexOf(message[i])])
        } else {
            userMessageEncrypted.push(message[i])
        }
    }

    return userMessageEncrypted.join("")
}
function oneDown(str) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let decode = "";

    for (let i = 0; i < str.length; i++) {
        const currentPos = str[i];
        decode += !letters.includes(currentPos) ? currentPos : letters[letters.indexOf(currentPos) + 1];
    }

    return typeof str === "string" ? decode : "Input is not a string";
}
console.log(oneDown("Ifmmp")); // Hello
console.log(oneDown("Uif usjdl up uijt lbub jt tjnqmf")); // The Trick To This kata is simple
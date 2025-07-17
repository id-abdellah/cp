function accum(s) {
    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1).toLowerCase()
    }

    return s.split("").map((s, i) => {
        return capitalize(s.repeat(i + 1))
    }).join("-")
}


console.log(accum("abcde")) // A-Bb-Ccc-Dddd-Eeeee

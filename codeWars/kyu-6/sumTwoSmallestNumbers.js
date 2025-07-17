function sumTwoSmallestNumbers(numbers) {
    let ns = numbers
    let fLowest = Math.min(...ns)
    ns.splice(ns.indexOf(fLowest), 1)
    let sLowest = Math.min(...ns)
    return fLowest + sLowest
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
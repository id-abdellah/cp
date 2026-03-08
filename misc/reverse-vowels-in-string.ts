
function reverseVowels(str: string): string {
    const VOWELS: string = "aioeu";
    let toArray: string[] = str.split("");
    let sp: number = 0;
    let ep: number = toArray.length - 1;
    while (sp < ep) {
        let spItem: string = toArray[sp];
        let epItem: string = toArray[ep];

        // better, readable one
        if (!VOWELS.includes(spItem)) {
            sp++
        } else if (!VOWELS.includes(epItem)) {
            ep++
        } else {
            [toArray[sp], toArray[ep]] = [toArray[ep], toArray[sp]]
            ep -= 1
            sp += 1
        }

        // my original solution
        // if (VOWELS.includes(spItem) && VOWELS.includes(epItem)) {
        //     [toArray[sp], toArray[ep]] = [toArray[ep], toArray[sp]]
        //     ep -= 1
        //     sp += 1
        // } else if (VOWELS.includes(spItem) && !VOWELS.includes(epItem)) {
        //     ep -= 1
        // } else if (!VOWELS.includes(spItem) && VOWELS.includes(epItem)) {
        //     sp += 1
        // } else {
        //     ep -= 1
        //     sp += 1
        // }
    }
    return toArray.join("")
}


console.log(reverseVowels("hello"))
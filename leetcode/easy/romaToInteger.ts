/**
 * Converte Roman numbers to Normal Numbers
 */


function romanToInt(s: string) {
    const SYMBOLS: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result: number = 0;
    let i = 0;
    while (i < s.length) {
        const curItem = s[i];
        const nextItem = s[i + 1];
        const isLastItem = i == s.length - 1;

        if (isLastItem) return result += SYMBOLS[s[i]]
        if (SYMBOLS[curItem] >= SYMBOLS[nextItem]) {
            result += SYMBOLS[curItem]
        } else {
            result += SYMBOLS[nextItem] - SYMBOLS[curItem];
            i++;
        }
        i++;
    }
    return result
}


[
    {
        input: "MCMXCIV",
        output: 1994
    },
    {
        input: "I",
        output: 1
    },
    {
        input: "LVIII",
        output: 58
    },
    {
        input: "III",
        output: 3
    }
].forEach(test => {
    const result = romanToInt(test.input);
    console.log(result === test.output ? "passed" : "failed")
})

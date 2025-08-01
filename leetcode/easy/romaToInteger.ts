/**
 * Converte Roman numbers to Normal Numbers
 */

import { expect, it } from "vitest";


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


if (import.meta.vitest) {
    it("test case 1", () => {
        expect(romanToInt("MCMXCIV")).toBe(1994)
    })
    it("test case 2", () => {
        expect(romanToInt("I")).toBe(1)
    })
    it("test case 3", () => {
        expect(romanToInt("LVIII")).toBe(58)
    })
    it("test case 4", () => {
        expect(romanToInt("III")).toBe(3)
    })
}
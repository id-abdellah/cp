import fs from "fs/promises";
import path from "path";

let puzzleInput: string[] = (await fs.readFile(path.join(import.meta.dirname, "puzzleInput-5.txt"), "utf-8")).split("\r\n");


class Solution {

    private static isContainsAtLeastThreeVowels(str: string) {
        const vowels = "aieou";
        let stringVowels = "";
        for (const ch of str) {
            if (vowels.includes(ch)) stringVowels += ch;
        };
        return stringVowels.length >= 3
    }

    private static isContainsAtLeastOneDoubleLetter(str: string) {
        for (let i = 0; i < str.length - 1; i++) {
            const curr = str[i];
            const next = str[i + 1]
            if (curr === next) return true
        }
        return false
    }

    private static noDisallowedStrings(str: string) {
        const disallowedStrings = ["ab", "cd", "pq", "xy"];
        const validation = disallowedStrings.every(ds => !str.includes(ds));
        return validation
    }

    private static isNice(str: string) {
        return Solution.isContainsAtLeastThreeVowels(str)
            && Solution.isContainsAtLeastOneDoubleLetter(str)
            && Solution.noDisallowedStrings(str)
    }

    static part1() {
        let counter = 0;
        for (const str of puzzleInput) {
            counter += this.isNice(str) ? 1 : 0;
        }
        return counter;
    }

    /** part 2 */

    private static conditionOne(str: string) {
        const regex = /(..).*\1/;
        return regex.test(str)
    }

    private static conditionTwo(str: string) {
        for (let i = 0; i < str.length - 1; i++) {
            let fl = str[i];
            let fs = str[i + 2];
            if (fl === fs) return true;
        }
        return false
    }

    static part2() {
        let counter = 0;
        for (const str of puzzleInput) {
            if (Solution.conditionOne(str) && Solution.conditionTwo(str)) counter++;
        }
        return counter
    }
}

console.log("Number of Nice strings: ", Solution.part1())
console.log("part two: ", Solution.part2());
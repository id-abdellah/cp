import { readFile } from "node:fs/promises";
import path from "node:path";


const input = await readFile(path.join(import.meta.dirname, "./puzzleInput-11.txt"), "utf-8")

console.log("input", input)



class Solution {


    private _increment(str: string) {
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        let splited = str.split("");

        for (let i = splited.length - 1; i >= 0; i--) {
            const currLetter = splited[i];
            const currLetterIndex = alphabets.indexOf(currLetter)
            const isZ = currLetter === "z";
            if (!isZ) {
                splited[i] = alphabets[currLetterIndex + 1]
                break;
            } else {
                splited[i] = "a";
            }
        }
        return splited.join("")
    }

    private _conditions(str: string) {
        const regexOne = /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/
        const regexTwo = /[iol]/
        const regexThree = /(?:([a-z])\1).*(?:([a-z])\2)/

        if (regexOne.test(str) && !regexTwo.test(str) && regexThree.test(str)) return true;
        return false;
    }

    partOne() {
        let nextPass = input;
        while (true) {
            nextPass = this._increment(nextPass);
            if (this._conditions(nextPass)) break;
        }
        return nextPass
    }

    partTwo() {
        let nextPass = this.partOne();
        while (true) {
            nextPass = this._increment(nextPass);
            if (this._conditions(nextPass)) break;
        }
        return nextPass
    }

}


const solution = new Solution();

console.log("next valid password:", solution.partOne())
console.log("next valid password again:", solution.partTwo())
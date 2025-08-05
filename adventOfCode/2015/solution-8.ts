import { readFile } from "node:fs/promises";
import path from "node:path";


const puzzleInput = (await readFile(path.join(import.meta.dirname, "puzzleInput-8.txt"), "utf-8")).split("\r\n");



class Solution {

    partOne() {
        let strChars: number = 0;
        let memoryChars: number = 0;

        for (const str of puzzleInput) {
            strChars += str.length
            let strMemory = 0;
            let i = 1;
            while (i < str.length - 1) {
                const currChar = str[i];
                if (currChar !== "\\") {
                    strMemory += 1
                    i += 1
                } else {
                    if (str[i + 1] === "\"" || str[i + 1] === "\\") {
                        i += 2;
                        strMemory += 1;
                    } else if (str[i + 1] == "x") {
                        i += 4
                        strMemory += 1;
                    }
                }
            }
            memoryChars += strMemory;
        }

        return strChars - memoryChars
    }

    partTwo() {
        let originalLengths: number = 0;
        let encodedLengths: number = 0;

        for (const str of puzzleInput) {
            originalLengths += str.length;
            let temp = "";
            for (const c of str) {
                if (c === "\\") {
                    temp += "\\\\";
                } else if (c === "\"") {
                    temp += "\\\"";
                } else {
                    temp += c;
                }
            }
            temp = "\"" + temp + "\""
            encodedLengths += temp.length
        }
        return encodedLengths - originalLengths;
    }

}

const solution = new Solution();

console.log(solution.partOne())
console.log(solution.partTwo())
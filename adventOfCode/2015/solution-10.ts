import { readFile } from "node:fs/promises";
import path from "node:path";


const input = await readFile(path.join(import.meta.dirname, "./puzzleInput-10.txt"), "utf-8")

console.log("input", input)


class Solution {

    private _lookAndSay(strInput: string) {
        let str = "";
        for (let i = 0; i < strInput.length; i++) {
            let currItem = strInput[i];
            let counter = 1;
            while (strInput[i + 1] === currItem) {
                counter++;
                i++
            }
            str += counter + currItem
        }
        return str
    }

    partOne() {
        let str = input;
        for (let i = 0; i < 40; i++) {
            str = this._lookAndSay(str)
        }
        return str.length
    }

    partTwo() {
        let str = input;
        for (let i = 0; i < 50; i++) {
            str = this._lookAndSay(str)
        }
        return str.length
    }

}

const solution = new Solution();

console.log("look and say 40 times:", solution.partOne())
console.log("look and say 50 times:", solution.partTwo())
import md5 from "md5";
import fs from "node:fs/promises"
import path from "node:path";

const puzzleInput = await fs.readFile(path.join(import.meta.dirname, "puzzleInput-4.txt"), "utf-8")

class Solution {

    static part1() {
        let secretKey = puzzleInput;
        let num = 1;
        let found = false;
        while (!found) {
            let result = md5(secretKey + num);
            if (result.startsWith("00000")) {
                found = true;
                return num
            }
            num++;
        }
    }

    static part2() {
        let secretKey = "bgvyzdsv"
        let num = 1;
        let found = false;
        while (!found) {
            let result = md5(secretKey + num);
            if (result.startsWith("000000")) {
                found = true;
                return num
            }
            num++;
        }
    }

}

console.log("start with 5 zeros: ", Solution.part1())
console.log("start with 6 zeros: ", Solution.part2())
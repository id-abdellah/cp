import { readFile } from "node:fs/promises";
import path from "node:path";


const input = JSON.parse(await readFile(path.join(import.meta.dirname, "./puzzleInput-12.txt"), "utf-8"))

class Solution {

    partOne() {

        let sum = 0;

        function travers(json: any) {
            if (typeof json === "number") {
                sum += json;
            } else if (Array.isArray(json)) {
                for (const item of json) {
                    travers(item)
                }
            } else if (typeof json === "object") {
                for (const key in json) {
                    travers(json[key])
                }
            }

        }

        travers(input);

        return sum
    }

    partTwo() {
        let sum = 0;

        function travers(json: any) {
            if (typeof json === "number") {
                sum += json;
            } else if (Array.isArray(json)) {
                for (const item of json) {
                    travers(item)
                }
            } else if (typeof json === "object") {
                if (!Object.values(json).includes("red")) {
                    for (const key in json) {
                        travers(json[key])
                    }
                }
            }

        }

        travers(input);

        return sum
    }

}


const solution = new Solution();
console.log("part one:", solution.partOne())
console.log("part two:", solution.partTwo())
import { readFile } from "node:fs/promises";
import path from "node:path";


const puzzleInput = (await readFile(path.join(import.meta.dirname, "puzzleInput-7.txt"), "utf-8")).split("\r\n");


class Solution {
    public hashMap: Record<string, string>
    public memo: Record<string, number>;

    constructor() {
        this.hashMap = Object.fromEntries(puzzleInput.map(instruction => instruction.split(" -> ").reverse()));
        this.memo = {}
    }

    evaluate(wire: string) {
        if (!isNaN(+wire)) return parseFloat(wire);
        if (wire in this.memo) return this.memo[wire];

        let expression = this.hashMap[wire];
        let parts = expression.split(" ")

        let result: number;

        if (parts.length === 1) {
            result = this.evaluate(parts[0])
        } else if (parts.length === 2) {
            result = ~this.evaluate(parts[1]) & 0xFFFF
        } else if (parts.length === 3) {
            let [left, op, right] = parts;
            const leftVal = this.evaluate(left);
            const rightVal = this.evaluate(right);

            switch (op) {
                case "AND":
                    result = leftVal & rightVal;
                    break;
                case "OR":
                    result = leftVal | rightVal;
                    break;
                case "RSHIFT":
                    result = leftVal >>> rightVal;
                    break;
                case "LSHIFT":
                    result = (leftVal << rightVal) & 0xFFFF;
                    break;
                default:
                    "nothing"
            }
        }

        this.memo[wire] = result;
        return result
    }

    partOne() {
        return this.evaluate("a")
    }

    partTwo(a: number) {
        this.hashMap = Object.fromEntries(puzzleInput.map(instruction => instruction.split(" -> ").reverse()));
        this.memo = {};

        this.hashMap["b"] = String(a);
        return this.evaluate("a")
    }
}


const solution = new Solution();

console.log(solution.partOne())
console.log(solution.partTwo(solution.partOne()))
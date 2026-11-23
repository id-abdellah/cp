import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-03.txt"), "utf-8");


class Solution {
    private input: string[];

    constructor() {
        this.input = rawInput.split("\n")
    }

    private _maximumSubsequenceOfLengthK(sequence: string, k: number): string {
        let result = "";
        let start = 0;
        while (result.length < k) {
            const remaining = k - result.length;
            const end = sequence.length - remaining + 1;
            let maxDigit = -1;
            let maxIndex = start;
            for (let i = start; i < end; i++) {
                const digit = Number(sequence[i]);
                if (digit > maxDigit) {
                    maxDigit = digit;
                    maxIndex = i;
                }
            }
            result += sequence[maxIndex];
            start = maxIndex + 1;
        }
        return result;
    }

    public part1() {
        let sum = this.input.reduce((acc, curr) => acc += Number(this._maximumSubsequenceOfLengthK(curr, 2)), 0)
        return sum
    }


    public part2() {
        let sum = this.input.reduce((acc, curr) => acc += Number(this._maximumSubsequenceOfLengthK(curr, 12)), 0)
        return sum
    }
}


const solution = new Solution();

console.log(solution.part1()) // 17085
console.log(solution.part2()) // 169408143086082
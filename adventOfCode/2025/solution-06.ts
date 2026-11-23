import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-06.txt"), "utf-8");


class Solution {

    private input: string[][];
    private problems: string[][];
    private rows: number;
    private cols: number;

    constructor() {
        this.input = rawInput.split("\n").map(l => l.split(/\s+/).filter(i => i !== ""));
        this.rows = this.input.length;
        this.cols = this.input[0].length
        this.problems = [];
        for (let i = 0; i < this.cols; i++) {
            let temp: string[] = []
            for (let j = 0; j < this.rows; j++) {
                temp.push(this.input[j][i])
            }
            this.problems.push(temp)
        }
    }

    public part1() {
        return this.problems.reduce((acc, curr) => {
            let operation: string = curr.pop();
            acc += eval(curr.join(operation));
            return acc
        }, 0)
    }


    /***************************************
    ****************************************/

    public part2() { }
}

const solution = new Solution();

console.log(solution.part1()) // 
console.log(solution.part2()) // 

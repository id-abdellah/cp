import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-08.txt"), "utf-8");

console.log(rawInput)

class Solution {

    constructor() {
    }


    public part1() {
    }


    /***************************************
     * Part Two
    ****************************************/

    public part2() {
    }
}

const solution = new Solution();

console.log(solution.part1()) //
console.log(solution.part2()) // 

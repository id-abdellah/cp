import { readFile } from "node:fs/promises"
import path from "node:path"



let input = await readFile(path.join(import.meta.dirname, "./input-10.txt"), "utf-8")


type Assigns = Record<string, number[]>

class Solution {
    private instructions: string[]
    constructor() {
        this.instructions = input.split("\r\n")
    }

    partOne() {
        return this.instructions
    }

}


const solution = new Solution()
console.log(solution.partOne())
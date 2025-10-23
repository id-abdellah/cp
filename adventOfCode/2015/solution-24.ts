import { readFile } from "node:fs/promises"
import path from "node:path"

let input = await readFile(path.join(import.meta.dirname, "./puzzleInput-24.txt"), "utf-8")

class Solution {

    partOne() {

    }

}


console.log(new Solution().partOne())
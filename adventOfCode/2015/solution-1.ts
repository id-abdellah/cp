import fs from "node:fs/promises"

const __direname = import.meta.dirname;

const puzzleInput = await fs.readFile(__direname + "\\puzzleInput-1.txt", "utf-8");

/* Part 1 */

let start: number = 0;

for (const p of puzzleInput) {
    start += p === "(" ? 1 : -1;
}

console.log("floor: ", start)


/* Part 2 */

let start2: number = 0;
let whichPosition: number = 0;
for (let i = 0; i < puzzleInput.length; i++) {
    const p = puzzleInput[i];
    start2 += p === "(" ? 1 : -1;
    if (start2 === -1) {
        whichPosition = i + 1;
        break;
    }
}

console.log("first pos causes -1 floor entering: ", whichPosition)
import { readFile } from "node:fs/promises"
import path from "node:path"

let input = await readFile(path.join(import.meta.dirname, "./input-02.txt"), "utf-8")

class Solution {
    private keypad: string[][]
    private directions: Record<"U" | "D" | "R" | "L", { x: number, y: number }>
    private instructions: string[]
    private prevButton: string
    private prevBtnPosition: Record<"x" | "y", number>

    constructor() {
        this.keypad = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"]
        ];
        this.directions = {
            "U": { x: 0, y: -1 },
            "D": { x: 0, y: 1 },
            "R": { x: 1, y: 0 },
            "L": { x: -1, y: 0 }
        }
        this.instructions = input.split("\r\n");
        this.prevButton = "5"
        this.prevBtnPosition = { x: 1, y: 1 }
    }

    partOne() {
        let code = ""
        for (const sequence of this.instructions) {
            for (const move of sequence) {
                let dir = this.directions[move as "U" | "D" | "L" | "R"]
                let nextBtnPosition = { ...this.prevBtnPosition }
                nextBtnPosition.x += dir.x
                nextBtnPosition.y += dir.y

                if (nextBtnPosition.y < 0 || nextBtnPosition.y > 2 || nextBtnPosition.x < 0 || nextBtnPosition.x > 2) continue

                this.prevButton = this.keypad[nextBtnPosition.y][nextBtnPosition.x]
                this.prevBtnPosition = nextBtnPosition

            }
            code += this.prevButton
        }
        return code
    }

    partTwo() {
        this.keypad = [
            [null, null, "1", null, null],
            [null, "2", "3", "4", null],
            ["5", "6", "7", "8", "9"],
            [null, "A", "B", "C", null],
            [null, null, "D", null, null]
        ]
        this.prevButton = "5"
        this.prevBtnPosition = { x: 0, y: 2 }

        let code = ""
        for (const sequence of this.instructions) {
            for (const move of sequence) {
                let dir = this.directions[move as "U" | "D" | "L" | "R"]
                let nextBtnPosition = { ...this.prevBtnPosition }
                nextBtnPosition.x += dir.x
                nextBtnPosition.y += dir.y

                if (
                    nextBtnPosition.y < 0 ||
                    nextBtnPosition.y > 4 ||
                    nextBtnPosition.x < 0 ||
                    nextBtnPosition.x > 4 ||
                    !this.keypad[nextBtnPosition.y][nextBtnPosition.x]
                ) continue

                this.prevButton = this.keypad[nextBtnPosition.y][nextBtnPosition.x]
                this.prevBtnPosition = nextBtnPosition

            }
            code += this.prevButton
        }
        return code
    }

}


console.log(new Solution().partOne()) // 38961
console.log(new Solution().partTwo()) // 46C92
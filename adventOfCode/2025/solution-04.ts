import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-04.txt"), "utf-8");

type Input = string[][]
type Directions = Record<"top" | "right" | "bottom" | "left" | "topRight" | "topLeft" | "bottomRight" | "bottomLeft", { x: number, y: number }>

class Solution {
    private input: Input;
    private directions: Directions;
    constructor() {
        this.directions = {
            top: {
                x: 0,
                y: -1
            },
            right: {
                x: 1,
                y: 0
            },
            bottom: {
                x: 0,
                y: 1
            },
            left: {
                x: -1,
                y: 0
            },
            topRight: {
                x: 1,
                y: -1
            },
            topLeft: {
                x: -1,
                y: -1
            },
            bottomRight: {
                x: 1,
                y: 1
            },
            bottomLeft: {
                x: -1,
                y: 1
            }
        }
        this.input = rawInput.split("\n").map(l => l.split(""));
    }

    private _checkNeighbors(grid: Input, x: number, y: number): number {
        let counter: number = 0;
        for (const moves of Object.values(this.directions)) {
            let newX = x + moves.x;
            let newY = y + moves.y;
            if (
                newY < 0
                || newY >= grid.length
                || newX < 0
                || newX >= grid[0].length
            ) continue;
            if (grid[newY][newX] === "@") counter += 1
        }
        return counter
    }

    public part1() {
        let counter: number = 0;
        for (let y = 0; y < this.input.length; y++) {
            const row: string[] = this.input[y];
            for (let x = 0; x < row.length; x++) {
                if (this.input[y][x] === "@" && this._checkNeighbors(this.input, x, y) < 4) counter++
            }
        }
        return counter
    }

    public part2() {
        let grid = structuredClone(this.input)
        let somethingRemoved: boolean = true;
        let toRemove: { x: number, y: number }[] = []
        let counter: number = 0;

        while (somethingRemoved) {
            somethingRemoved = false
            let innerCounter: number = 0
            for (let y = 0; y < grid.length; y++) {
                const row: string[] = grid[y];
                for (let x = 0; x < row.length; x++) {
                    if (grid[y][x] === "@" && this._checkNeighbors(grid, x, y) < 4) {
                        somethingRemoved = true;
                        toRemove.push({ x, y });
                        innerCounter++;
                    }
                }
            }
            counter += innerCounter;
            for (const { x, y } of toRemove) {
                grid[y][x] = "."
            }
            toRemove = [];
        }
        return counter
    }
}

const solution = new Solution();

console.log(solution.part1())
console.log(solution.part2())

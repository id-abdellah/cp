import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-07.txt"), "utf-8");


class Solution {
    private input: string[][];
    private rows: number;
    private cols: number;

    constructor() {
        this.input = rawInput.split("\n").map(l => l.split(""));
        this.rows = this.input.length;
        this.cols = this.input[0].length
    }

    private _printInput(grid: string[][]) {
        console.log(grid.map(l => l.join("")).join("\n"))
    }

    public part1() {
        let grid: string[][] = structuredClone(this.input);
        let nextPositions: number[] = [Math.floor(this.cols / 2)];
        let counter: number = 0
        for (let i = 1; i < grid.length; i++) {
            let newNextPositions: number[] = []

            nextPositions.forEach((pos) => {
                let spot: string = grid[i][pos];
                if (spot === ".") {
                    grid[i][pos] = "|"
                    newNextPositions.push(pos)
                }

                if (spot === "^") {
                    newNextPositions.push(pos - 1, pos + 1)
                    counter += 1
                }
            })

            nextPositions = newNextPositions
        }
        // this._printInput(grid)
        return counter
    }


    /***************************************
    ****************************************/

    public part2() {
        let grid: string[][] = structuredClone(this.input);
        let memo = new Map<string, number>();

        function dfs(row: number, col: number): number {
            if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 1;
            let cell: string = grid[row][col];

            if (memo.has(`${row}-${col}`)) return memo.get(`${row}-${col}`)!

            if (cell === "^") {
                let left_path = dfs(row + 1, col - 1);
                let right_path = dfs(row + 1, col + 1);
                memo.set(`${row}-${col}`, left_path + right_path)
            } else {
                memo.set(`${row}-${col}`, dfs(row + 1, col))
            }

            return memo.get(`${row}-${col}`)!
        }

        let result: number = dfs(0, grid[0].indexOf("S"))
        return result
    }
}

const solution = new Solution();

console.log(solution.part1()) // 1667
console.log(solution.part2()) // 

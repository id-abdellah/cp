import { readFile } from "node:fs/promises"
import path from "node:path"

let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-18.txt"), "utf-8")).split("\r\n")

type Directions = "top" | "bottom" | "left" | "right" | "top-right" | "top-left" | "bottom-right" | "bottom-left"

class Solution {
    public directions: Record<Directions, [number, number]>
    // Directions
    // [row, col]
    constructor() {
        this.directions = {
            "top": [-1, 0],
            "bottom": [1, 0],
            "right": [0, 1],
            "left": [0, -1],
            "top-right": [-1, 1],
            "top-left": [-1, -1],
            "bottom-right": [1, 1],
            "bottom-left": [1, -1]
        }
    }

    private getNeighbors(grid: string[][], row: number, col: number) {
        return Object.values(this.directions).map(d => {
            const neighborRow = row + d[0];
            const neighborCol = col + d[1];
            if (neighborRow === -1 || neighborRow === grid.length) {
                return undefined
            }
            return grid[neighborRow][neighborCol]
        })
    }

    private updateCellState(grid: string[][], nextGrid: string[][], row: number, col: number, neighbors: string[]) {
        let currentState: "on" | "off" = grid[row][col] === "#" ? "on" : "off";

        let neigborsWhoAreOn: number = neighbors.filter(n => n === "#").length;

        if (currentState === "on") {
            nextGrid[row][col] = (neigborsWhoAreOn === 3 || neigborsWhoAreOn === 2) ? "#" : "."
        } else {
            nextGrid[row][col] = (neigborsWhoAreOn === 3) ? "#" : "."
        }
    }

    partOne() {
        let grid = input.map(row => Array.from(row));

        for (let s = 0; s < 100; s++) {
            let nextGrid = Array.from({ length: 100 }, () => Array(100).fill("."))
            for (let i = 0; i < grid.length; i++) {
                let row = i;
                for (let j = 0; j < grid[i].length; j++) {
                    let col = j;
                    let neighbors = this.getNeighbors(grid, row, col);
                    this.updateCellState(grid, nextGrid, row, col, neighbors);
                }
            }
            grid = nextGrid
        }

        const result = grid.flat().filter(l => l === "#").length

        return result;
    }

    private isCorner(row: number, col: number) {
        let corners = ["0,0", "0,99", "99,99", "99,0"]
        return corners.includes([row, col].join(","))
    }


    partTwo() {
        let grid = input.map(row => Array.from(row));
        for (let s = 0; s < 100; s++) {
            let nextGrid = Array.from({ length: 100 }, () => Array(100).fill("."))
            nextGrid[0][0] = "#";
            nextGrid[0][99] = "#";
            nextGrid[99][99] = "#";
            nextGrid[99][0] = "#";
            for (let i = 0; i < grid.length; i++) {
                let row = i;
                for (let j = 0; j < grid[i].length; j++) {
                    let col = j;
                    let neighbors = this.getNeighbors(grid, row, col);
                    if (this.isCorner(row, col)) continue;
                    this.updateCellState(grid, nextGrid, row, col, neighbors);
                }
            }
            grid = nextGrid
        }

        const result = grid.flat().filter(l => l === "#").length

        return result;
    }

}

console.log(new Solution().partOne())
console.log(new Solution().partTwo())
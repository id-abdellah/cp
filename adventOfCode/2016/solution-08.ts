import { readFile } from "node:fs/promises"
import path from "node:path"



let input = await readFile(path.join(import.meta.dirname, "./input-08.txt"), "utf-8")


class Solution {
    private instructions: string[]
    private COLS: number
    private ROWS: number
    private grid: string[][]

    constructor() {
        this.instructions = input.split("\r\n")
        this.COLS = 50
        this.ROWS = 6
        this.grid = Array.from({ length: this.ROWS }, (_) => Array.from<string>({ length: this.COLS }).fill("."))
    }

    private _printGrid() {
        this.grid.forEach(row => {
            console.log(row.join(""))
        })
    }

    private _getNewElementRotationPos(currentIndex: number, movedBy: number, length: number) {
        return (currentIndex + movedBy) % length
    }

    private _turnOn(rect: string) {
        const dimensions = rect.split("x").map(_ => +_)
        for (let row = 0; row < dimensions[1]; row++) {
            for (let col = 0; col < dimensions[0]; col++) {
                this.grid[row][col] = "#"
            }
        }
    }

    private _rotateRow(rowIndex: number, moveBy: number) {
        let row = this.grid[rowIndex]
        let rotatedRow: string[] = Array.from({ length: this.COLS })
        for (let i = 0; i < row.length; i++) {
            let currElement = row[i]
            let currPos = i
            let newPos = this._getNewElementRotationPos(currPos, moveBy, this.COLS)
            rotatedRow[newPos] = currElement
        }
        this.grid[rowIndex] = rotatedRow
    }

    private _rotateCol(colIndex: number, moveBy: number) {
        let col: string[] = this.grid.map(r => r[colIndex])
        let rotatedCol: string[] = Array.from({ length: this.ROWS })

        for (let i = 0; i < col.length; i++) {
            let currElement = col[i]
            let currPos = i
            let newPos = this._getNewElementRotationPos(currPos, moveBy, this.ROWS)
            rotatedCol[newPos] = currElement
        }

        for (let i = 0; i < rotatedCol.length; i++) {
            let item = rotatedCol[i]
            this.grid[i][colIndex] = item
        }
    }

    private _count() {
        return this.grid.flat(1).filter(_ => _ == "#").length
    }

    partOne() {
        for (const instruction of this.instructions) {
            const splited = instruction.split(" ")

            if (instruction.includes("rect")) {
                this._turnOn(splited[1])
            } else if (instruction.includes("rotate row")) {
                let rowIndex = +splited[2].split("=")[1]
                let moveBy = +splited[4]
                this._rotateRow(rowIndex, moveBy)
            } else if (instruction.includes("rotate column")) {
                let colIndex = +splited[2].split("=")[1]
                let moveBy = +splited[4]
                this._rotateCol(colIndex, moveBy)
            }
        }
        return this._count()
    }


    partTwo() {
        this._printGrid()
        return "EOARGPHYAO"
    }
}


const solution = new Solution()
console.log(solution.partOne()) // 128
console.log(solution.partTwo()) // EOARGPHYAO
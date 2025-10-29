import { readFile } from "node:fs/promises"
import path from "node:path"

let input = await readFile(path.join(import.meta.dirname, "./input-03.txt"), "utf-8")

class Solution {
    private triangles: number[][]
    private possibleSums: number[][]

    constructor() {
        this.triangles = input.split("\r\n").map(s => s.trim().split(/\s+/).map(n => Number(n)))
        this.possibleSums = [
            [0, 1, 2],
            [0, 2, 1],
            [1, 2, 0],
        ]
    }

    private _isValidTriangle(triangle: number[]) {
        for (const p of this.possibleSums) {
            const side1 = triangle[p[0]]
            const side2 = triangle[p[1]]
            const side3 = triangle[p[2]]
            if (side1 + side2 <= side3) return false
        }
        return true
    }

    partOne() {
        let counter: number = 0;
        for (const triangle of this.triangles) {
            const result: boolean = this._isValidTriangle(triangle)
            counter += result ? 1 : 0
        }
        return counter
    }

    partTwo() {
        const newTrianglesSet: number[][] = []

        for (let i = 0; i < this.triangles.length; i += 3) {
            let chunk = this.triangles.slice(i, i + 3)
            let temp: number[][] = []
            for (let j = 0; j < chunk.length; j++) {
                temp.push(chunk.map(c => c[j]))
            }
            newTrianglesSet.push(...temp)
        }

        this.triangles = newTrianglesSet
        return this.partOne()
    }

}

console.log(new Solution().partOne()) // 993
console.log(new Solution().partTwo()) // 1849
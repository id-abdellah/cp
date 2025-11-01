import { readFile } from "node:fs/promises"
import path from "node:path"



let input = await readFile(path.join(import.meta.dirname, "./input-06.txt"), "utf-8")


class Solution {
    private jammingRecords: string[]
    constructor() {
        const lines = input.split("\r\n")
        const cols = Array.from({ length: lines[0].length }, (_, i) => {
            return lines.map(s => s[i]).join("")
        })
        this.jammingRecords = cols
    }

    private _getMostFrequentLetter(frequencies: Record<string, number>) {
        let toArr = Object.entries(frequencies)
        toArr = toArr.sort((a, b) => b[1] - a[1])
        return toArr[0][0]
    }

    partOne() {
        let erroCorrectedMsg = ""
        for (const col of this.jammingRecords) {
            let frequencies = col.split("").reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1
                return acc
            }, {} as Record<string, number>)
            erroCorrectedMsg += this._getMostFrequentLetter(frequencies)
        }
        return erroCorrectedMsg
    }

    private _getLessFrequentLetter(frequencies: Record<string, number>) {
        let toArr = Object.entries(frequencies)
        toArr = toArr.sort((a, b) => a[1] - b[1])
        return toArr[0][0]
    }

    partTwo() {
        let erroCorrectedMsg = ""
        for (const col of this.jammingRecords) {
            let frequencies = col.split("").reduce((acc, curr) => {
                acc[curr] = (acc[curr] || 0) + 1
                return acc
            }, {} as Record<string, number>)
            erroCorrectedMsg += this._getLessFrequentLetter(frequencies)
        }
        return erroCorrectedMsg
    }
}


console.log(new Solution().partOne()) // gebzfnbt
console.log(new Solution().partTwo()) // fykjtwyn
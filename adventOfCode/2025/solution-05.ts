import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-05.txt"), "utf-8");

class Solution {
    private ranges: string[];
    private IDs: string[];

    constructor() {
        this.ranges = rawInput.split("\n").filter(l => l.includes("-"));
        this.IDs = rawInput.split("\n").filter(l => !l.includes("-") && l !== "");
    }

    private _isFresh(id: string): boolean {
        return this.ranges.some((range: string) => {
            let from: number = Number(range.split("-")[0])
            let to: number = Number(range.split("-")[1])
            return Number(id) >= from && Number(id) <= to
        })
    }

    public part1() {
        let freshIDs: number = 0
        for (const id of this.IDs) {
            freshIDs += this._isFresh(id) ? 1 : 0
        }
        return freshIDs
    }

    private _sortRanges(ranges: string[]): number[][] {
        const toNumbers = ranges.map(r => [+r.split("-")[0], +r.split("-")[1]])
        toNumbers.sort((a, b) => a[0] - b[0])
        return toNumbers
    }

    private _testOverlap(s1: number, e1: number, s2: number, e2: number): boolean {
        return s1 <= e2 && s2 <= e1;
    }

    private _mergeRanges(sortedRanges: number[][]): number[][] {
        let isMergeHappened: boolean = true;
        while (isMergeHappened) {
            isMergeHappened = false
            for (let i = 0; i < sortedRanges.length - 1; i++) {
                let curRange: number[] = sortedRanges[i];
                let nRange: number[] = sortedRanges[i + 1]
                if (!this._testOverlap(curRange[0], curRange[1], nRange[0], nRange[1])) continue
                let newStart: number = Math.min(curRange[0], nRange[0]);
                let newEnd: number = Math.max(curRange[1], nRange[1]);
                sortedRanges[i] = [newStart, newEnd];
                sortedRanges.splice(i + 1, 1)
                isMergeHappened = true
            }
        }
        return sortedRanges
    }

    public part2() {
        let sortedRanges: number[][] = this._sortRanges(this.ranges);
        let mergedRanges: number[][] = this._mergeRanges(sortedRanges)

        let counter: number = 0
        for (const r of mergedRanges) {
            counter += r[1] - r[0] + 1
        }
        return counter
    }
}

const solution = new Solution();

console.log(solution.part1()) // 758
console.log(solution.part2()) // 343143696885053

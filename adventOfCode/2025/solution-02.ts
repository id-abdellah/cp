import { readFile } from "fs/promises"
import path from "path"


const rawInput: string = await readFile(path.join(import.meta.dirname, "input-02.txt"), "utf-8");

class Solution {
    private input: string[];
    private invalidIDs: number[];
    constructor() {
        this.input = rawInput.split(",");
        this.invalidIDs = [];
    }

    private isInvalidID(id: number): boolean {
        let toString = String(id);
        let length = toString.length;
        if (length % 2 != 0) return false;
        let leftHalf = toString.slice(0, (length / 2));
        let rightHalf = toString.slice((length / 2));
        return leftHalf === rightHalf
    }

    private isInvalidId2(id: number): boolean {
        const s = String(id);
        const len = s.length;
        if (len === 1) return false;
        for (let i = 1; i <= len / 2; i++) {
            if (len % i !== 0) continue;
            const pattern = s.slice(0, i);
            if (pattern.repeat(len / i) === s) {
                return true;
            }
        }
        return false;
    }

    public part1() {
        for (const range of this.input) {
            const from = Number(range.split("-")[0])
            const to = Number(range.split("-")[1])

            for (let i = from; i <= to; i++) {
                if (!this.isInvalidID(i)) continue
                this.invalidIDs.push(i)
            }
        }
        console.log(this.invalidIDs.reduce((prev, curr, arr) => prev += curr, 0))
    }


    public part2() {
        this.invalidIDs = [];
        for (const range of this.input) {
            const from = Number(range.split("-")[0])
            const to = Number(range.split("-")[1])

            for (let i = from; i <= to; i++) {
                if (!this.isInvalidId2(i)) continue
                this.invalidIDs.push(i)
            }
        }
        console.log(this.invalidIDs.reduce((prev, curr, arr) => prev += curr, 0))

    }

}


const solution = new Solution();

solution.part1()
solution.part2()
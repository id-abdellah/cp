import { readFile } from "node:fs/promises"
import path from "node:path"

let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-17.txt"), "utf-8")).split("\r\n").map(s => +s)

class Solution {

    private *generateSubsets<T>(arr: T[]): Generator<T[]> {
        const n = arr.length;
        for (let mask = 0; mask < (1 << n); mask++) {
            const subset: T[] = [];
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) subset.push(arr[i]);
            }
            yield subset;
        }
    }

    partOne() {
        const subsets: number[][] = []
        for (const subset of this.generateSubsets(input)) {
            subsets.push(subset);
        }

        let result = 0;

        for (const container of subsets) {
            const test = container.reduce((acc, curr) => {
                acc -= curr;
                return acc
            }, 150);
            result += test === 0 ? 1 : 0;
        }
        return result
    }

    partTwo() {
        const subsets: number[][] = []
        for (const subset of this.generateSubsets(input)) {
            subsets.push(subset);
        }

        let wantedContainers: number[][] = [];

        for (const container of subsets) {
            const test = container.reduce((acc, curr) => {
                acc -= curr;
                return acc
            }, 150);
            if (test === 0) {
                wantedContainers.push(container)
            }
        }

        let minLength = Math.min(...wantedContainers.map(c => c.length));
        let result = wantedContainers.filter(c => c.length === minLength).length
        return result
    }

}


console.log(new Solution().partOne())
console.log(new Solution().partTwo())
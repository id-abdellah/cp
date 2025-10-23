import { readFile } from "node:fs/promises"
import path from "node:path"

let input = Number(await readFile(path.join(import.meta.dirname, "./puzzleInput-20.txt"), "utf-8"))


class Solution {

    private getDivisors(n: number) {
        const result = [];
        for (let i = 1; i <= n; i++) {
            if ((n % i) === 0) result.push(i);
        }
        return result
    }

    partOne() {
        let i = 776_000
        while (true) {
            const sum = this.getDivisors(i).reduce((acc, curr) => {
                acc += curr * 10;
                return acc
            }, 0);
            if (sum >= input) return i;
            i++;
        }
    }

    partTwo() {
        const limit = input / 11;
        const sums = new Uint32Array(limit + 1);

        for (let elf = 1; elf <= limit; elf++) {
            let visits = 0;
            for (let house = elf; house <= limit && visits < 50; house += elf) {
                sums[house] += elf * 11;
                visits++;
            }
        }

        for (let house = 1; house <= limit; house++) {
            if (sums[house] >= input) {
                return house;
            }
        }
    }


}


console.log(new Solution().partOne())
console.log(new Solution().partTwo())
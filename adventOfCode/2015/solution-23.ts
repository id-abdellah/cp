import { readFile } from "node:fs/promises"
import path from "node:path"

let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-23.txt"), "utf-8")).split("\r\n")

type Instruction = {
    order: string,
    r?: string,
    offset?: number
}

class Solution {

    private parse() {

        const instructions: Instruction[] = [];

        for (const inst of input) {
            const splited = inst.split(" ");
            const obj = {};

            let order = splited[0];
            obj["order"] = order

            if (order === "jmp") {
                obj["offset"] = Number(splited[1])
            } else if (["jio", "jie"].includes(order)) {
                obj["r"] = splited[1].slice(0, -1);
                obj["offset"] = Number(splited[2])
            } else {
                obj["r"] = splited[1]
            }

            instructions.push(obj as Instruction);
        }

        return instructions
    }

    private action(stats: { a: number, b: number }, order: string, r: string) {
        const map = {
            "hlf": () => stats[r] = Math.floor(stats[r] / 2),
            "tpl": () => stats[r] = stats[r] * 3,
            "inc": () => stats[r] = stats[r] + 1
        }
        map[order]();
    }

    partOne() {
        let stats = {
            "a": 0,
            "b": 0
        };

        const instructions = this.parse();

        let i = 0;
        while (i < instructions.length) {
            let { order, r, offset } = instructions[i];
            if (["hlf", "tpl", "inc"].includes(order)) {
                this.action(stats, order, r);
                i++;
                continue
            }
            if (order === "jmp") {
                i += offset;
                continue;
            }
            if (order === "jie" && stats[r] % 2 === 0) {
                i += offset;
                continue;
            }
            if (order === "jio" && stats[r] === 1) {
                i += offset;
                continue;
            }
            i++;
        }

        return stats.b
    }


    partTwo() {
        let stats = {
            "a": 1,
            "b": 0
        };

        const instructions = this.parse();

        let i = 0;
        while (i < instructions.length) {
            let { order, r, offset } = instructions[i];
            if (["hlf", "tpl", "inc"].includes(order)) {
                this.action(stats, order, r);
                i++;
                continue
            }
            if (order === "jmp") {
                i += offset;
                continue;
            }
            if (order === "jie" && stats[r] % 2 === 0) {
                i += offset;
                continue;
            }
            if (order === "jio" && stats[r] === 1) {
                i += offset;
                continue;
            }
            i++;
        }

        return stats.b
    }


}


console.log(new Solution().partOne())
console.log(new Solution().partTwo())
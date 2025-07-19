import fs from "node:fs/promises"

const __direname = import.meta.dirname;

const puzzleInput = await fs.readFile(__direname + "\\puzzleInput-3.txt", "utf-8");

class Solution {

    static part1() {
        let visited = new Set<string>();
        let coords = {
            x: 0,
            y: 0
        };
        let directions = {
            "^": () => coords.y++,
            "v": () => coords.y--,
            ">": () => coords.x++,
            "<": () => coords.x--
        }
        for (let move of puzzleInput) {
            directions[move]();
            visited.add(`${coords.x},${coords.y}`)
        }
        return visited.size + 1
    }

    static part2() {
        let visited = new Set<string>();
        let santaMovement = {
            x: 0,
            y: 0
        };
        let roboSantaMovement = {
            x: 0,
            y: 0
        }
        let directions = {
            "^": (coords) => coords.y++,
            "v": (coords) => coords.y--,
            ">": (coords) => coords.x++,
            "<": (coords) => coords.x--
        }
        visited.add("0,0")
        let santaTurn = true;
        for (let move of puzzleInput) {
            directions[move](santaTurn ? santaMovement : roboSantaMovement);
            visited.add(`${(santaTurn ? santaMovement : roboSantaMovement).x},${(santaTurn ? santaMovement : roboSantaMovement).y}`)
            santaTurn = !santaTurn
        }
        return visited.size
    }

}


console.log("Houses receive at least one present: ", Solution.part1())
console.log("Houses receive at least one present with robot-santa help: ", Solution.part2())
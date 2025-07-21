import fs from "fs/promises";
import path from "path";

type Point = {
    x: number
    y: number
}

type Action = "on" | "off" | "toggle"


let puzzleInput = (await fs.readFile(path.join(import.meta.dirname, "puzzleInput-6.txt"), "utf-8")).split("\r\n");


class Solution {
    static grid: number[][] = Array.from({ length: 1000 }, () => Array(1000).fill(0));

    // check if the given point "p" is within two points "p1, p2"
    static isWithin(p: Point, p1: Point, p2: Point) {
        const { x, y } = p;
        const { x: x1, y: y1 } = p1
        const { x: x2, y: y2 } = p2

        if (
            (x >= Math.min(x1, x2) && x <= Math.max(x1, x2))
            &&
            (y >= Math.min(y1, y2) && y <= Math.max(y1, y2))
        ) return true;
        return false
    }

    // parsing the string to readable data
    static extractData(str: string) {
        let action: Action, p1: Point, p2: Point;

        let splited = str.split(" ");

        if (str.includes("turn")) {
            action = splited[1] === "on" ? "on" : "off";
            p1 = {
                x: +splited[2].split(",")[0],
                y: +splited[2].split(",")[1]
            };
            p2 = {
                x: +splited[4].split(",")[0],
                y: +splited[4].split(",")[1]
            };
        } else {
            action = "toggle";
            p1 = {
                x: +splited[1].split(",")[0],
                y: +splited[1].split(",")[1]
            };
            p2 = {
                x: +splited[3].split(",")[0],
                y: +splited[3].split(",")[1]
            };
        }
        return {
            action,
            p1,
            p2
        }
    }

    // apply the action to 
    static applyAction(action: Action, x: number, y: number) {
        Solution.grid[y][x] = action === "on" ? 1 : action === "off" ? 0 : +!Solution.grid[y][x]
    }

    /*
        my first attempt. it was valid output "569999" but in 2.5s execution time.
        so instead of checking every point in the grid if it is within given range. i start from the given ponints.
        because of that i get "600ms" execution time
    */
    static partOne() {
        for (const instruction of puzzleInput) {
            let { action, p1, p2 } = Solution.extractData(instruction);
            let currPoint: Point = {
                x: 0,
                y: 0
            }
            for (let i = p1.y; i <= p2.y; i++) {
                currPoint.y = i;
                for (let j = p1.x; j <= p2.x; j++) {
                    currPoint.x = j;
                    if (Solution.isWithin(currPoint, p1, p2)) Solution.applyAction(action, currPoint.y, currPoint.x)
                }
            }
        }
        return Solution.grid.flat(1).reduce((acc, curr) => acc + curr, 0)
    }


    /**
     * Part Two
     */

    static applyAction2(action: Action, x: number, y: number) {
        if (action === "on") Solution.grid[y][x] += 1;
        if (action === "toggle") Solution.grid[y][x] += 2;
        if (action === "off") Solution.grid[y][x] -= Solution.grid[y][x] === 0 ? 0 : 1;
    }

    static partTwo() {
        // to reset part one
        Solution.grid = Array.from({ length: 1000 }, () => Array(1000).fill(0));

        for (const instruction of puzzleInput) {
            let { action, p1, p2 } = Solution.extractData(instruction);
            let currPoint: Point = {
                x: 0,
                y: 0
            }
            for (let i = p1.y; i <= p2.y; i++) {
                currPoint.y = i;
                for (let j = p1.x; j <= p2.x; j++) {
                    currPoint.x = j;
                    if (Solution.isWithin(currPoint, p1, p2)) Solution.applyAction2(action, currPoint.y, currPoint.x)
                }
            }
        }
        return Solution.grid.flat(1).reduce((acc, curr) => acc + curr, 0)
    }

}

console.time("partOne Timing");
console.log(Solution.partOne());
console.timeEnd("partOne Timing");

console.time("partTwo Timing");
console.log(Solution.partTwo());
console.timeEnd("partTwo Timing");
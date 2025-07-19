import fs from "node:fs/promises"

const __direname = import.meta.dirname;

const puzzleInput = await fs.readFile(__direname + "\\puzzleInput-2.txt", "utf-8");


type DimensionsTuple = [number, number, number]


class Solution {

    private static calculateSurface(dimensions: DimensionsTuple) {
        const [l, w, h] = dimensions;
        return (2 * l * w) + (2 * w * h) + (2 * h * l)
    }

    private static getSlack(dimensions: DimensionsTuple) {
        const [l, w, h] = dimensions;
        return Math.min(l * w, w * h, h * l)
    }

    static part1() {
        const splited = puzzleInput.split("\r\n");
        let dimensionsList = splited.map(d => d.split("x").map(s => +s));
        let surfaces = dimensionsList.map(dimensions => {
            return Solution.calculateSurface(dimensions as DimensionsTuple) + Solution.getSlack(dimensions as DimensionsTuple);
        });
        let sum = surfaces.reduce((acc, curr) => {
            return acc + curr
        }, 0);
        return sum;
    }

    /** Part 2 */

    private static getRibbonLength(dimensions: DimensionsTuple) {
        const [l, w, h] = dimensions;
        return Math.min((2 * w) + (2 * l), (2 * h) + (2 * w), (2 * l) + (2 * h))
    }

    private static getBow(dimensions: DimensionsTuple) {
        const [l, w, h] = dimensions;
        return l * w * h
    }

    static part2() {
        const splited = puzzleInput.split("\r\n");
        let dimensionsList = splited.map(d => d.split("x").map(s => +s));
        let ribbons = dimensionsList.map(dimensions => {
            return Solution.getRibbonLength(dimensions as DimensionsTuple) + Solution.getBow(dimensions as DimensionsTuple)
        })
        let sum = ribbons.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        return sum
    }
}

console.log("Total square feet of wrapping paper:", Solution.part1())
console.log("Total feet of ribbon: ", Solution.part2())
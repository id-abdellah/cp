import { readFile } from "node:fs/promises";
import path from "node:path";

let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-15.txt"), "utf-8")).split("\r\n")

type IngredientsProperties = {
    capacity: number,
    durability: number,
    flavor: number,
    texture: number
    calories?: number
}


class Solution {

    private ingredientsData() {
        const map: Record<string, IngredientsProperties> = {};
        for (const statement of input) {
            const splited = statement.split(" ");
            map[splited[0].slice(0, -1)] = {
                capacity: parseInt(splited[2]),
                durability: parseInt(splited[4]),
                flavor: parseInt(splited[6]),
                texture: parseInt(splited[8]),
                calories: parseInt(splited[10])
            };
        }
        return map;
    }

    private all100Compositions() {
        const result: number[][] = [];

        for (let i = 0; i <= 100; i++) {
            for (let j = 0; j <= 100 - i; j++) {
                for (let k = 0; k <= 100 - i - j; k++) {
                    const l = 100 - i - j - k
                    result.push([i, j, k, l])
                }
            }
        }

        return result;
    }

    partOne() {
        const data = this.ingredientsData();
        const compositions100 = this.all100Compositions()
        const compositionMap = {
            0: Object.keys(data)[0],
            1: Object.keys(data)[1],
            2: Object.keys(data)[2],
            3: Object.keys(data)[3]
        }
        let max = 0;

        for (const comp of compositions100) {
            let tempMax = 0;

            let cp = 0;
            let dr = 0;
            let fl = 0;
            let tx = 0;

            for (let i = 0; i < comp.length; i++) {
                let ingredient = compositionMap[i];
                let spoons = comp[i]
                cp += data[ingredient].capacity * spoons;
                dr += data[ingredient].durability * spoons;
                fl += data[ingredient].flavor * spoons;
                tx += data[ingredient].texture * spoons;
            }

            cp = cp < 0 ? 0 : cp
            dr = dr < 0 ? 0 : dr
            fl = fl < 0 ? 0 : fl
            tx = tx < 0 ? 0 : tx;

            tempMax = cp * dr * fl * tx;
            max = Math.max(tempMax, max);
        }

        return max
    };

    partTwo() {
        const data = this.ingredientsData();
        const compositions100 = this.all100Compositions()
        const compositionMap = {
            0: Object.keys(data)[0],
            1: Object.keys(data)[1],
            2: Object.keys(data)[2],
            3: Object.keys(data)[3]
        }
        let max = 0;

        for (const comp of compositions100) {
            let tempMax = 0;

            let cp = 0;
            let dr = 0;
            let fl = 0;
            let tx = 0;
            let cl = 0;

            for (let i = 0; i < comp.length; i++) {
                let ingredient = compositionMap[i];
                let spoons = comp[i]
                cp += data[ingredient].capacity * spoons;
                dr += data[ingredient].durability * spoons;
                fl += data[ingredient].flavor * spoons;
                tx += data[ingredient].texture * spoons;
                cl += data[ingredient].calories * spoons;
            }

            cp = cp < 0 ? 0 : cp
            dr = dr < 0 ? 0 : dr
            fl = fl < 0 ? 0 : fl
            tx = tx < 0 ? 0 : tx;
            cl = cl < 0 ? 0 : cl;

            if (cl === 500) {
                tempMax = cp * dr * fl * tx;
                max = Math.max(tempMax, max);
            }
        }

        return max
    }

}


console.log(new Solution().partOne())
console.log(new Solution().partTwo())
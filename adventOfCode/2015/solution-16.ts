import { readFile } from "node:fs/promises";
import path from "node:path";



let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-16.txt"), "utf-8")).split("\r\n")


class Solution {
    static confirmedValues = {
        children: 3,
        cats: 7,
        samoyeds: 2,
        pomeranians: 3,
        akitas: 0,
        vizslas: 0,
        goldfish: 5,
        trees: 3,
        cars: 2,
        perfumes: 1
    }

    private auntsRememberedData() {
        type RememberedDataType = Record<string, Partial<Record<keyof typeof Solution.confirmedValues, number>>>;

        const rememberedData: RememberedDataType | any = {};

        for (const statement of input) {
            const splitted = statement.split(" ");

            rememberedData[splitted[1].slice(0, -1)] = {
                [splitted[2].slice(0, -1)]: parseInt(splitted[3]),
                [splitted[4].slice(0, -1)]: parseInt(splitted[5]),
                [splitted[6].slice(0, -1)]: parseInt(splitted[7]),
            }
        }
        return rememberedData as RememberedDataType
    }

    partOne() {
        const remembered = Object.entries(this.auntsRememberedData());
        let trueAunt: string;
        for (const aunt of remembered) {
            const auntObj = aunt[1]
            const validation = Object.keys(Solution.confirmedValues).every(key => {
                if (!(key in auntObj)) return true;
                if (key in auntObj && Solution.confirmedValues[key] === auntObj[key]) return true;
                if (key in auntObj && Solution.confirmedValues[key] !== auntObj[key]) return false;
            })
            if (validation) {
                trueAunt = aunt[0];
                break;
            }
        }
        return trueAunt
    }

    partTwo() {
        const remembered = Object.entries(this.auntsRememberedData());
        let trueAunt: string;
        for (const aunt of remembered) {
            const auntObj = aunt[1]
            const validation = Object.keys(Solution.confirmedValues).every(key => {
                if (!(key in auntObj)) return true;
                if (key in auntObj) {
                    if (["cats", "trees"].includes(key)) {
                        return auntObj[key] > Solution.confirmedValues[key]
                    } else if (["pomeranians", "goldfish"].includes(key)) {
                        return auntObj[key] < Solution.confirmedValues[key]
                    } else {
                        return auntObj[key] === Solution.confirmedValues[key]
                    }
                };
            })

            if (validation) {
                trueAunt = aunt[0];
                break;
            }
        }
        return trueAunt

    }

};

console.log(new Solution().partOne())
console.log(new Solution().partTwo())
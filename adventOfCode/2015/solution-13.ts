import { readFile } from "node:fs/promises";
import path from "node:path";


let input = (await readFile(path.join(import.meta.dirname, "./puzzleInput-13.txt"), "utf-8")).split("\r\n")


class Solution {

    private getPersons() {
        const persons = new Set<string>();
        for (const statement of input) {
            const splited = statement.split(" ");
            persons.add(splited[0])
            persons.add(splited[splited.length - 1].replace(".", ""))
        }
        return [...persons]
    }

    private getRelations() {
        const map = new Map<string, number>();
        for (const relation of input) {
            const splited = relation.slice(0, -1).split(" ");

            const firstParty = splited.at(0);
            const secondParty = splited.at(-1);
            const operation = splited.at(2)
            const unit = Number(splited.at(3));

            map.set(`${firstParty}-${secondParty}`, operation === "gain" ? unit : -unit);
        }
        return map;
    }

    private permutations<T>(arr: T[]): T[][] {
        if (arr.length === 0) return [];

        const first = arr[0];
        const rest = arr.slice(1);

        function permute(array: T[]): T[][] {
            if (array.length === 0) return [[]];

            const result: T[][] = [];
            for (let i = 0; i < array.length; i++) {
                const current = array[i];
                const remaining = array.slice(0, i).concat(array.slice(i + 1));
                for (const p of permute(remaining)) {
                    result.push([current, ...p]);
                }
            }
            return result;
        }

        const perms = permute(rest);
        return perms.map(p => [first, ...p]);
    }

    partOne() {
        const persons = this.getPersons();
        const permutations = this.permutations(persons);
        const relations = this.getRelations();

        let optimal = -Infinity;

        for (let arrangement of permutations) {
            arrangement = [arrangement.at(-1), ...arrangement, arrangement.at(0)]

            let arrangTotal = 0;

            for (let i = 1; i < arrangement.length - 1; i++) {
                const currPerson = arrangement[i]
                const hisLeft = arrangement[i - 1];
                const hisRight = arrangement[i + 1];
                const happiness = relations.get(`${currPerson}-${hisRight}`) + relations.get(`${currPerson}-${hisLeft}`)
                arrangTotal += happiness
            }

            optimal = Math.max(optimal, arrangTotal)
        }

        return optimal
    }

    partTwo() {

        // we only need to add myself "Obito" in the list.

        let newInput = []

        for (const p of this.getPersons()) {
            let s1 = `${p} would gain 0 happiness units by sitting next to Obito.`
            let s2 = `Obito would gain 0 happiness units by sitting next to ${p}.`
            newInput.push(s1);
            newInput.push(s2);
        }

        input = input.concat(newInput)

        // this part remain the same as the part one
        return this.partOne()
    }


}

const solution = new Solution();

console.log("part one: ", solution.partOne());
console.log("part two: ", solution.partTwo());
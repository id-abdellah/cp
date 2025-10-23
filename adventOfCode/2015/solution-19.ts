import { readFile } from "node:fs/promises"
import path from "node:path"

let input = await readFile(path.join(import.meta.dirname, "./puzzleInput-19.txt"), "utf-8");

/**
 * TBH
 *      This Challenge Day. i did not understand the problem text correctly.
 *      so because of that, i let AI do all the works for me.
 *      
 * TBH 2
 *      i dont use AI to solve any of my condig problems.
 *      i just ask him for a hint or explaining the problem text to my native tongue which is arabic
 *      otherwise i don't let him to think for me.
 *      but this was an exception. even with AI arabic explaining i still didn't understand it.
 * 
 * and i am sorry if my english is terrible :)
 */

class Solution {

    private data() {
        const molecule = input.split("\r\n").slice(-1).toString()

        const rules = input.split("\r\n").slice(0, -2).map(r => [r.split(" ")[0], r.split(" ")[2]])

        return {
            rules,
            molecule
        }
    }

    partOne() {
        const { rules, molecule } = this.data();

        const distinct = new Set<string>();

        for (const [from, to] of rules) {
            let i = 0;
            while (true) {
                i = molecule.indexOf(from, i);
                if (i === -1) break;
                const next = molecule.slice(0, i) + to + molecule.slice(i + from.length);
                distinct.add(next);
                i++;
            }
        }

        return distinct.size
    }


    partTwo() {
        const molecule = this.data().molecule
        const tokens = molecule.match(/[A-Z][a-z]?/g) ?? [];
        const count = (sym: string) => tokens.filter(t => t === sym).length;

        const rn = count("Rn");
        const ar = count("Ar");
        const y = count("Y");

        return tokens.length - rn - ar - 2 * y - 1;
    }
}


console.log(new Solution().partOne())
console.log(new Solution().partTwo())
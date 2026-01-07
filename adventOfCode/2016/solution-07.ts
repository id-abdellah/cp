import { readFile } from "node:fs/promises"
import path from "node:path"



let input = await readFile(path.join(import.meta.dirname, "./input-07.txt"), "utf-8")


class Solution {
    private ips: string[]

    constructor() {
        this.ips = input.split("\r\n")
    }

    partOne() {
        let score = 0;
        const PATTERN = /([a-z])(?!\1)([a-z])\2\1/g

        for (const ip of this.ips) {
            const parts = ip.split(/\[|\]/)

            const insidText = parts.filter((_, i) => i % 2 === 1).join(" ")
            const outsideText = parts.filter((_, i) => i % 2 === 0).join(" ")

            const isPatternExistsInInsideText = !!insidText.match(PATTERN)
            const isPatternExistsInOutsideText = !!outsideText.match(PATTERN)

            if (!isPatternExistsInInsideText && isPatternExistsInOutsideText) score++;
        }
        return score
    }

    partTwo() {
        let score = 0;

        const ABA_LOOKAHEAD = /(?=(([a-z])(?!\2)([a-z])\2))/g;

        for (const ip of this.ips) {
            const parts = ip.split(/\[|\]/);
            const outsideParts = parts.filter((_, i) => i % 2 === 0).join(" ");
            const insideParts = parts.filter((_, i) => i % 2 === 1).join(" ");

            const abas = new Set<string>();
            for (const m of outsideParts.matchAll(ABA_LOOKAHEAD)) {
                if (m[1]) abas.add(m[1]);
            }

            if (abas.size === 0) continue;

            let supports = false;
            for (const aba of abas) {
                const a = aba[0];
                const b = aba[1];
                const bab = `${b}${a}${b}`;
                if (insideParts.includes(bab)) {
                    supports = true;
                    break;
                }
            }

            if (supports) score++;
        }

        return score;
    }

}


console.log(new Solution().partOne()) // 103
console.log(new Solution().partTwo()) // 258
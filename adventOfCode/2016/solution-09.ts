import { readFile } from "node:fs/promises"
import path from "node:path"



let input = await readFile(path.join(import.meta.dirname, "./input-09.txt"), "utf-8")


class Solution {

    private _decompress(input: string) {
        let decompressed = "";
        let i = 0;
        while (i < input.length) {
            let c = input[i]

            if (c !== "(") {
                decompressed += c
                i++
            } else {
                let closingIndex = input.indexOf(")", i)

                let marker = input
                    .slice(i + 1, closingIndex)
                    .split("x")
                    .map(_ => +_)

                let partToRepeat = input.slice(closingIndex + 1, closingIndex + marker[0] + 1)
                decompressed += partToRepeat.repeat(marker[1])

                i = closingIndex + marker[0]
                continue
            }
        }
        return decompressed
    }

    partOne() {
        return this._decompress(input).length
    }


    private _decompressedLength(str: string): number {
        let length = 0;
        let i = 0;

        while (i < str.length) {
            if (str[i] !== "(") {
                length++;
                i++;
            } else {
                let closingIndex = str.indexOf(")", i);
                let [len, times] = str
                    .slice(i + 1, closingIndex)
                    .split("x")
                    .map(Number);

                let section = str.slice(closingIndex + 1, closingIndex + 1 + len);

                // recursion handles nested markers
                length += this._decompressedLength(section) * times;

                i = closingIndex + 1 + len;
            }
        }

        return length;
    }

    partTwo() {
        return this._decompressedLength(input);
    }
}


const solution = new Solution()
console.log(solution.partOne()) // 110364
console.log(solution.partTwo()) // 10774309173
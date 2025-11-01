import { readFile } from "node:fs/promises"
import path from "node:path"
import md5 from "md5"

let input = await readFile(path.join(import.meta.dirname, "./input-05.txt"), "utf-8")

class Solution {

    partOne() {
        let password = ""
        let i = 0
        while (password.length < 8) {
            const expected = md5(input + i)
            if (expected.startsWith("0".repeat(5))) {
                password += expected[5]
            }
            i++
        }
        return password
    }


    partTwo() {
        let password: string[] = Array.from<string>({ length: 8 }).fill("_")
        let i = 0
        for (; password.includes("_"); i++) {
            const hash = md5(input + i)
            const position = hash[5]
            const portion = hash[6]
            if (!hash.startsWith("0".repeat(5))) continue
            if (isNaN(+position)) continue
            if (+position >= password.length) continue
            if (password[+position] !== "_") continue
            password[+position] = portion
        }

        return password.join("")
    }
}


// console.log(new Solution().partOne()) // 4543c154
// console.log(new Solution().partTwo()) // 1050cbbd
import { readFile } from "node:fs/promises"
import path from "node:path"

let input = await readFile(path.join(import.meta.dirname, "./input-04.txt"), "utf-8")

type EncryptedDataObject = {
    originalEncryptedName?: string
    encryptedName: string,
    sectorID: number,
    checksum: string
}


class Solution {
    private rooms: EncryptedDataObject[]
    private realRooms: EncryptedDataObject[]

    constructor() {
        this.rooms = this._prepareInput()
        this.realRooms = []
    }

    private _prepareInput() {
        let splited = input.split("\r\n")
        let prepared: EncryptedDataObject[] = splited.map(s => {
            let obj: EncryptedDataObject = {
                sectorID: Number(s.match(/\d+/)),
                checksum: s.match(/\[(\w+)\]/g)[0].replace("[", "").replace("]", ""),
                encryptedName: s.split("-").slice(0, -1).join(""),
                originalEncryptedName: s.split("-").slice(0, -1).join("-")
            }
            return obj
        })
        return prepared
    }

    private _extractChecksum(encryptedName: string) {
        let frequencies = encryptedName.split("").reduce((acc, curr) => {
            if (curr in acc) {
                acc[curr] += 1
            } else {
                acc[curr] = 1
            }
            return acc
        }, {})
        let mostFrequent = (Object.entries(frequencies) as [string, number][]).sort((a, b) => {
            let result = b[1] - a[1]
            if (result > 0 || result < 0) return result
            if (b[0] > a[0]) return -1
            if (b[0] < a[0]) return 1
        })
        return mostFrequent.splice(0, 5).map(entry => entry[0]).join("")
    }


    partOne() {
        let sum = 0;
        for (const room of this.rooms) {
            const givenChecksum = room.checksum.split("").sort().join("")
            const roomChecksum = this._extractChecksum(room.encryptedName).split("").sort().join("")
            if (givenChecksum === roomChecksum) {
                sum += room.sectorID
                this.realRooms.push(room)
            }
        }
        return sum
    }

    private _decrypte(char: string, shift: number) {
        if (char == "-") {
            return " "
        } else {
            let charPosition = char.charCodeAt(0) - 97
            let afterShiftPosition = (charPosition + shift) % 26
            let toLetter = String.fromCharCode(afterShiftPosition + 97)
            return toLetter
        }
    }

    partTwo() {
        for (const room of this.realRooms) {
            const shift = room.sectorID % 26
            let decrypted = ""
            for (let i = 0; i < room.originalEncryptedName.length; i++) {
                const c = room.originalEncryptedName[i]
                decrypted += this._decrypte(c, shift)
            }

            if (decrypted.indexOf("pole") > 0) return room.sectorID
        }
    }

}

const solution = new Solution()
console.log(solution.partOne()) // 137896
console.log(solution.partTwo()) // 501
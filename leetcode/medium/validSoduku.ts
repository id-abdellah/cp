
class Solution {

    // if false then the row contains duplicates

    checkRow(row: string[]) {
        let filtered = row.filter(s => s !== ".");
        let set = new Set(filtered);
        return filtered.length === set.size
    }

    checkColumn(column: string[]) {
        let filtered = column.filter(s => s !== ".");
        let set = new Set(filtered);
        return filtered.length === set.size
    }

    check3x3Subgrid(subgrid: string[][]) {
        let filtered = subgrid.flat(1).filter(s => s !== ".");
        let set = new Set(filtered);
        return filtered.length === set.size
    }

    // main function
    validSoduku(board: string[][]) {

        for (let i = 0; i < board.length; i++) {
            let row = board[i];
            let column = [];
            for (let j = 0; j < board.length; j++) {
                column.push(board[j][i])
            }

            if (!this.checkRow(row) || !this.checkColumn(column)) return false;
        }

        let a1 = board.slice(0, 3).map(x => x.slice(0, 3))
        let a2 = board.slice(0, 3).map(x => x.slice(3, 6))
        let a3 = board.slice(0, 3).map(x => x.slice(6, 9))

        let b1 = board.slice(3, 6).map(x => x.slice(0, 3))
        let b2 = board.slice(3, 6).map(x => x.slice(3, 6))
        let b3 = board.slice(3, 6).map(x => x.slice(6, 9))

        let c1 = board.slice(6, 9).map(x => x.slice(0, 3))
        let c2 = board.slice(6, 9).map(x => x.slice(3, 6))
        let c3 = board.slice(6, 9).map(x => x.slice(6, 9))

        let subgrid = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

        for (let i = 0; i < subgrid.length; i++) {
            if (!this.check3x3Subgrid(subgrid[i])) return false;
        }

        return true
    }

}

let solution = new Solution()

const input1 = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const input2 = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(solution.validSoduku(input1))
console.log(solution.validSoduku(input2))
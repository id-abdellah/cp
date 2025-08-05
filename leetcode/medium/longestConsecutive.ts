
/*
Put all numbers into a Set

Why? Because Sets let you check if (set.has(x)) in O(1) time.

Loop through each number num in the array:

Only start a new sequence if num - 1 is not in the set

That means num is the start of a new sequence

From that number, count how long the sequence goes:
num + 1, num + 2, ..., until a number is not in the set.

Track the max length across all sequences.
*/

class Solution {

    longestConsecutive(nums: number[]) {
        let numSet = new Set(nums);
        let maxLength = 0;

        for (const num of numSet) {
            if (numSet.has(num - 1)) continue;
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = Math.max(maxLength, currentLength)
        }
        return maxLength
    }

}

let solution = new Solution();

console.log(solution.longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(solution.longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(solution.longestConsecutive([1, 0, 1, 2]))
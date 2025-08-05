
class Solution {

    public twoSumII(numbers: number[], target: number): number[] {
        let begin = 0, end = numbers.length - 1;

        while (begin < end) {
            const biggerCompare = numbers[begin] + numbers[end] > target;
            const smallCompare = numbers[begin] + numbers[end] < target;
            if (biggerCompare) {
                end--;
            } else if (smallCompare) {
                begin++;
            } else {
                return [begin + 1, end + 1]
            }
        }
    }

}


const solution = new Solution();

console.log(solution.twoSumII([2, 7, 11, 15], 9))
console.log(solution.twoSumII([2, 3, 4], 6))
console.log(solution.twoSumII([-1, 0], -1))

class Solution {

    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let triples = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const fixed = nums[i];
            let begin = i + 1;
            let end = nums.length - 1;
            let target = -fixed;
            while (begin < end) {
                if (nums[begin] + nums[end] > target) {
                    end--;
                } else if (nums[begin] + nums[end] < target) {
                    begin++
                } else {
                    triples.push([nums[i], nums[begin], nums[end]])
                    while (begin < end && nums[begin] === nums[begin + 1]) begin++;
                    while (begin < end && nums[end] === nums[end - 1]) end--;

                    begin++;
                    end--;
                }
            }
        }
        return triples
    }

}


const solution = new Solution();

console.log(solution.threeSum([-1, 0, 1, 2, -1, -4]))
console.log(solution.threeSum([0, 0, 0]))
console.log(solution.threeSum([0, 0, 0, 0]))
console.log(solution.threeSum([0, 1, 1]))
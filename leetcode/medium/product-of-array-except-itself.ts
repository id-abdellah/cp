class Solution {

    bruteForce(nums: number[]): number[] {
        let prefix: number[] = [];
        let suffix: number[] = [];
        let result: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            prefix = nums.slice(0, i);
            suffix = nums.slice(i + 1)
            result.push(
                prefix.reduce((acc, curr) => acc *= curr, 1)
                *
                suffix.reduce((acc, curr) => acc *= curr, 1)
            )
        }
        return result
    };


    productExceptSelf(nums: number[]) {
        const n = nums.length;
        const res = new Array(n);
        const pref = new Array(n);
        const suff = new Array(n);

        pref[0] = 1;
        suff[n - 1] = 1;
        for (let i = 1; i < n; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        }
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i];
        }
        return res;
    }

}


const solution = new Solution();

console.log(solution.productExceptSelf([1, 2, 3, 4]))
console.log(solution.productExceptSelf([-1, 1, 0, -3, 3]))


class Solution {

    maxArea(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let max = 0;
        while (left < right) {
            const h = Math.min(height[left], height[right]);
            const w = right - left
            const area = h * w
            max = Math.max(max, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max
    }

}


const solution = new Solution();

console.log(solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
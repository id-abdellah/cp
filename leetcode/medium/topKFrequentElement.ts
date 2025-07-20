
class Solution {
    static topKFrequentElements(nums: number[], k: number): number[] {
        let frequency: Record<string, number> = {};

        for (const n of nums) {
            if (!(n in frequency)) {
                frequency[n] = 1;
            } else {
                frequency[n] += 1;
            }
        }
        return Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => +entry[0])
    }
}

if (import.meta.vitest) {
    const { it, expect, describe } = await import('vitest')

    it("test case 1", () => {
        expect(Solution.topKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    })
    it("test case 2", () => {
        expect(Solution.topKFrequentElements([1], 1)).toEqual([1])
    })
    it("test case 3", () => {
        expect(Solution.topKFrequentElements([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([2, -1])
    })
}